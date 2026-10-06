// Meta (Facebook/Instagram) Lead Ads webhook → fetch full lead from Graph API → insert into `leads`.
// Deploy: supabase functions deploy meta-leads-webhook --no-verify-jwt
// (Meta signs its own requests; Supabase JWT auth must be off for this public endpoint.)
//
// Required secrets: META_VERIFY_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
//   and a page token (either form below).
// Page tokens — a lead can only be fetched with ITS OWN page's token:
//   • Multi-page: META_PAGE_TOKENS = JSON {"<page_id>":"<page_token>", ...}
//   • Single-page fallback: META_PAGE_ACCESS_TOKEN = "<page_token>"
// Optional: META_GRAPH_VERSION (defaults below — bump when Meta deprecates the version).
//
// Meta setup: Webhooks → Page → subscribe to the `leadgen` field, point the
// callback URL at this function, and use META_VERIFY_TOKEN as the Verify Token.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.30.0";
import { parsePhoneNumberFromString } from "https://esm.sh/libphonenumber-js@1.11.4";

// Meta lead forms rarely ask for country, but the phone is E.164 (+<cc>...), so
// derive the country from it. Returns a full country name ("India") or null.
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countryFromPhone = (phone: string | null): string | null => {
  if (!phone) return null;
  try {
    const digits = phone.replace(/[^\d+]/g, "");
    const p = parsePhoneNumberFromString(digits.startsWith("+") ? digits : `+${digits}`);
    if (p?.country) return regionNames.of(p.country) ?? null;
  } catch { /* unparseable → leave country null */ }
  return null;
};

// Graph API versions get deprecated roughly every ~2 years; keep it tunable.
const GRAPH_VERSION = Deno.env.get("META_GRAPH_VERSION") ?? "v21.0";

const env = (k: string): string => {
  const v = Deno.env.get(k);
  if (!v) throw new Error(`Missing required env var: ${k}`);
  return v;
};

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

const text = (body: string, status = 200): Response =>
  new Response(body, { status, headers: { "content-type": "text/plain" } });

type FieldDatum = { name: string; values: string[] };

// Meta lead field names vary by form; map the common ones to our columns.
const mapLead = (fieldData: FieldDatum[]): { full_name: string | null; email: string | null; phone: string | null } => {
  const m: Record<string, string> = {};
  for (const f of fieldData ?? []) {
    if (f?.name && Array.isArray(f.values) && f.values.length) m[f.name] = f.values[0];
  }
  const fullName =
    m.full_name ??
    [m.first_name, m.last_name].filter(Boolean).join(" ").trim() ??
    null;
  return {
    full_name: fullName || null,
    email: m.email ?? null,
    phone: m.phone_number ?? m.phone ?? null,
  };
};

// Resolve the page access token for a given page_id. A lead is only readable with
// its own page's token, so multi-page setups map page_id → token via META_PAGE_TOKENS.
let pageTokenMap: Record<string, string> | null = null;
const tokenForPage = (pageId: string): string => {
  if (pageTokenMap === null) {
    const raw = Deno.env.get("META_PAGE_TOKENS");
    pageTokenMap = raw ? (JSON.parse(raw) as Record<string, string>) : {};
  }
  const token = pageTokenMap[pageId] ?? Deno.env.get("META_PAGE_ACCESS_TOKEN");
  if (!token) {
    throw new Error(`No page access token for page_id ${pageId}. Add it to META_PAGE_TOKENS.`);
  }
  return token;
};

// Fetch the actual lead data for a leadgen_id from the Graph API, using that page's token.
const fetchLead = async (leadgenId: string, token: string): Promise<FieldDatum[]> => {
  const url =
    `https://graph.facebook.com/${GRAPH_VERSION}/${leadgenId}` +
    `?fields=field_data,created_time&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Graph API failed for ${leadgenId}: ${res.status} ${await res.text()}`);
  const body = await res.json();
  return (body.field_data ?? []) as FieldDatum[];
};

// Country-based lead assignment, replacing the old round-robin RPC.
// US → Anas Hussain. UK & India → Sachin Mastwal. Any other/undetected
// country is left unassigned (null) rather than guessed.
const ANAS_HUSSAIN = "dc79f111-c6bc-4cd0-a084-a69a318b770a";
const SACHIN_MASTWAL = "1483e46c-4669-4d5a-9908-3b10563b08f2";
const COUNTRY_OWNER: Record<string, string> = {
  "United States": ANAS_HUSSAIN,
  "United Kingdom": SACHIN_MASTWAL,
  "India": SACHIN_MASTWAL,
};
const assigneeForCountry = (country: string | null): string | null =>
  country ? COUNTRY_OWNER[country] ?? null : null;

type LeadRef = { leadgenId: string; pageId: string };

// Pull every (leadgen_id, page_id) out of a webhook payload (one payload may batch several).
const extractLeads = (payload: unknown): LeadRef[] => {
  const out: LeadRef[] = [];
  const entries = (payload as { entry?: unknown[] })?.entry ?? [];
  for (const entry of entries) {
    const entryPageId = String((entry as { id?: string })?.id ?? ""); // entry.id is the page id
    const changes = (entry as { changes?: unknown[] })?.changes ?? [];
    for (const change of changes) {
      const c = change as { field?: string; value?: { leadgen_id?: string; page_id?: string } };
      if (c.field === "leadgen" && c.value?.leadgen_id) {
        out.push({
          leadgenId: String(c.value.leadgen_id),
          pageId: String(c.value.page_id ?? entryPageId),
        });
      }
    }
  }
  return out;
};

Deno.serve(async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  // ── GET: webhook verification handshake ──
  if (req.method === "GET") {
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");
    if (mode === "subscribe" && token === env("META_VERIFY_TOKEN") && challenge) {
      console.log("Meta webhook verified");
      return text(challenge, 200); // raw challenge, NOT json — Meta requires this exactly
    }
    console.warn("Meta webhook verification failed");
    return text("Forbidden", 403);
  }

  // ── POST: lead ingestion ──
  if (req.method === "POST") {
    const raw = await req.text();
    console.log("Meta POST payload:", raw); // ponytail: temporary diagnostic — remove once leads flow
    let payload: unknown;
    try {
      payload = JSON.parse(raw);
    } catch {
      return json({ error: "invalid json" }, 400);
    }

    const leads = extractLeads(payload);
    if (leads.length === 0) {
      console.log("No leadgen_id in payload; ignoring");
      return json({ ok: true, ignored: true });
    }

    try {
      const supabase = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"));
      const results: Array<{ leadgen_id: string; ok: boolean; error?: string }> = [];

      for (const { leadgenId, pageId } of leads) {
        // Meta's sample/test event uses the all-4s dummy id; it can't be fetched.
        // Ack it (200) so Meta stops retrying the fake lead forever.
        if (leadgenId === "444444444444") {
          console.log("Meta test event; acknowledging");
          results.push({ leadgen_id: leadgenId, ok: true });
          continue;
        }
        try {
          const token = tokenForPage(pageId);
          const fieldData = await fetchLead(leadgenId, token);
          const mapped = mapLead(fieldData);
          const country = countryFromPhone(mapped.phone);

          const { error } = await supabase.from("leads").insert({
            ...mapped,
            country, // derived from the E.164 phone
            source: "Meta Lead Ad",
            lead_stage: "New Lead",
            assigned_to: assigneeForCountry(country), // US → Anas, UK/India → Sachin
          });
          if (error) throw new Error(error.message);

          console.log(`Inserted lead from leadgen_id ${leadgenId}`);
          results.push({ leadgen_id: leadgenId, ok: true });
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error(`Failed leadgen_id ${leadgenId}: ${msg}`);
          results.push({ leadgen_id: leadgenId, ok: false, error: msg });
        }
      }

      // Meta retries on non-2xx; only fail the whole request if nothing landed.
      const anyOk = results.some((r) => r.ok);
      return json({ ok: anyOk, results }, anyOk ? 200 : 500);
    } catch (err) {
      console.error("Ingestion error:", err);
      return json({ error: String(err instanceof Error ? err.message : err) }, 500);
    }
  }

  return json({ error: "method not allowed" }, 405);
});
