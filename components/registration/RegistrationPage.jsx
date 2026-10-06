"use client";

/**
 * RegistrationPage
 * ----------------
 * Self-contained programme registration + payment page for AcdyOn.
 *
 * PROJECT PLUG-IN POINTS (search for "PLUG:"):
 *  - PLUG:THEME    theme tokens mirror app/globals.css (--royal / --gold / --navy).
 *                  Site already ships next-themes with attribute="class", so the
 *                  `.dark` class on <html> drives dark mode automatically. The
 *                  built-in toggle is opt-in via <RegistrationPage showThemeToggle />
 *                  for standalone (non-Next) drops.
 *  - PLUG:LOGO     /acdyon-logo.webp (public/). Header/footer come from the site
 *                  root layout, so this component renders page content only.
 *  - PLUG:KEYS     hosted Stripe / Razorpay payment links (PAYMENT_LINK_*).
 *  - PLUG:FEES     PAYMENT_AMOUNT_* placeholders below.
 *  - PLUG:ANALYTICS track() pushes to window.dataLayer (site already loads GTM).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { submitRegistration } from "@/lib/supabase";
import { partnerUniversities } from "@/lib/data/site";

/* ────────────────────────────────────────────────────────────
   CONFIG — replace placeholders with production values
   ──────────────────────────────────────────────────────────── */

// PLUG:FEES — live application fees, minor units (paise / pence / cents).
// Each amount must match the amount configured on its payment link below.
const PAYMENT_AMOUNT_INR = 9900;  // ₹99.00
const PAYMENT_AMOUNT_GBP = 4900;  // £49.00
const PAYMENT_AMOUNT_USD = 4900;  // $49.00

// PLUG:KEYS — hosted payment links (live). Swap for test-mode links while
// testing; hosted links mean there are no publishable keys to manage.
const PAYMENT_LINK_STRIPE_US = "https://buy.stripe.com/00w4gz9Jn3hV2HUf1g4ow0y";
const PAYMENT_LINK_STRIPE_UK = "https://buy.stripe.com/6oU6oHbkp9Nl4RLgx64ko0g";
const PAYMENT_LINK_RAZORPAY = "https://rzp.io/rzp/4rx4FfFb";

const COUNTRIES = [
  { code: "IN", label: "India", provider: "razorpay", currency: "INR", amount: PAYMENT_AMOUNT_INR, symbol: "₹", link: PAYMENT_LINK_RAZORPAY },
  { code: "UK", label: "United Kingdom", provider: "stripe", currency: "GBP", amount: PAYMENT_AMOUNT_GBP, symbol: "£", link: PAYMENT_LINK_STRIPE_UK },
  { code: "US", label: "United States", provider: "stripe", currency: "USD", amount: PAYMENT_AMOUNT_USD, symbol: "$", link: PAYMENT_LINK_STRIPE_US },
];

const QUALIFICATIONS = ["Graduation", "Masters", "Doctorate", "Other"];
const EXPERIENCE = ["0-5 years", "5-10 years", "10-15 years", "15+ years"];
const PROGRAMMES = [
  "Doctor of Business Administration",
  "PhD",
  "Honorary Doctorate",
  "Other",
];

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Optional field: 7–15 digits, optional leading +, spaces/dashes/parens tolerated.
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;

function isValidUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

/** PLUG:ANALYTICS — site loads GTM in app/layout.tsx; dataLayer is the hook. */
function track(event, payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

const EMPTY = {
  name: "",
  email: "",
  mobile: "",
  country: "",
  qualification: "",
  qualificationOther: "",
  experience: "",
  programme: "",
  programmeOther: "",
  linkedin: "",
  subjectArea: "",
  purpose: "",
};

export default function RegistrationPage({ showThemeToggle = false }) {
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | paying | verifying | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const statusRef = useRef(null);

  // PLUG:THEME — only used in standalone drops. Inside the Next site the
  // next-themes provider already owns the `dark` class on <html>.
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (!showThemeToggle) return;
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, [showThemeToggle]);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const country = useMemo(
    () => COUNTRIES.find((c) => c.code === form.country) || null,
    [form.country]
  );

  const programmeLabel =
    form.programme === "Other" ? form.programmeOther.trim() : form.programme;

  /* ── Validation ───────────────────────────────────────────── */
  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (form.mobile.trim() && !PHONE_RE.test(form.mobile.trim()))
      e.mobile = "Enter a valid mobile number, e.g. +44 7465 278021.";
    if (!form.country) e.country = "Select your country.";
    if (!form.qualification) e.qualification = "Select your highest qualification.";
    else if (form.qualification === "Other" && !form.qualificationOther.trim())
      e.qualificationOther = "Please specify your qualification.";
    if (!form.experience) e.experience = "Select your total work experience.";
    if (!form.programme) e.programme = "Select a programme.";
    else if (form.programme === "Other" && !form.programmeOther.trim())
      e.programmeOther = "Please specify the programme.";
    if (form.linkedin.trim() && !isValidUrl(form.linkedin.trim()))
      e.linkedin = "Enter a full URL, e.g. https://linkedin.com/in/yourname.";
    if (!form.subjectArea.trim())
      e.subjectArea = "Tell us your preferred title or subject area.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;
  const busy = status === "paying" || status === "verifying";

  const set = (field) => (ev) => {
    const value = ev.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (errorMsg) setErrorMsg("");
  };
  const blur = (field) => () => setTouched((t) => ({ ...t, [field]: true }));
  const showErr = (field) => (touched[field] ? errors[field] : undefined);

  /* ── Payment flow ─────────────────────────────────────────── */

  const fail = useCallback((message, provider) => {
    track("payment_failure", { provider, message });
    setErrorMsg(message);
    setStatus("error");
  }, []);

  // Optional resume. Kept out of `form` (a File is not a string) and rejected
  // early so a bad file never reaches the upload.
  const [resume, setResume] = useState(null);
  const [resumeErr, setResumeErr] = useState("");
  function onResume(ev) {
    const file = ev.target.files?.[0] || null;
    if (file && file.type !== "application/pdf") {
      setResume(null); setResumeErr("Please upload a PDF."); return;
    }
    if (file && file.size > 5 * 1024 * 1024) {
      setResume(null); setResumeErr("That file is over 5 MB."); return;
    }
    setResumeErr(""); setResume(file);
  }

  async function handlePay(ev) {
    ev.preventDefault();
    setTouched(
      Object.keys(EMPTY).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    );
    if (!isValid || busy || !country) return;

    setErrorMsg("");
    setStatus("paying");
    track("payment_attempt", {
      provider: country.provider,
      currency: country.currency,
      amount: country.amount,
      programme: programmeLabel,
    });

    // Hosted payment links hand back no signature we can verify, so the
    // application is recorded first (status: awaiting_payment) and reconciled
    // against the Stripe/Razorpay dashboard afterwards. Swap to the
    // create-intent / verify-and-submit API in server/payments.js if you ever
    // need payment-verified-before-save.
    const res = await submitRegistration({
      fullName: form.name,
      email: form.email,
      phone: form.mobile,
      country: country.label,
      qualification:
        form.qualification === "Other" ? form.qualificationOther : form.qualification,
      experience: form.experience,
      programme: programmeLabel,
      linkedin: form.linkedin,
      subjectArea: form.subjectArea,
    });

    if (!res.success) {
      fail(res.message, country.provider);
      return;
    }

    track("payment_redirect", { provider: country.provider });
    window.location.href = country.link;
  }

  // Move screen-reader focus to the live status region on state change.
  useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.focus();
  }, [status]);

  /* ── Form ─────────────────────────────────────────────────── */
  return (
    <main className="acd-reg">
      <Styles />

      <header className="acd-head">
        <div>
          <p className="acd-eyebrow">Programme registration</p>
          <h1 className="acd-h1">Apply for your doctoral pathway</h1>
          <p className="acd-lede">
            Complete your details, then continue to secure payment. Your application
            is saved before you are redirected to the payment page.
          </p>
        </div>
        {showThemeToggle ? (
          <button type="button" className="acd-theme" onClick={toggleTheme}
            aria-pressed={theme === "dark"} aria-label="Toggle dark mode">
            {theme === "dark" ? "☀︎ Light" : "☾ Dark"}
          </button>
        ) : null}
      </header>

      <div className="acd-grid">
        <form className="acd-card" onSubmit={handlePay} noValidate>
          {/* Personal details */}
          <fieldset className="acd-fs">
            <legend className="acd-legend">Your details</legend>

            <Field id="name" label="Full name" required error={showErr("name")}>
              <input id="name" name="name" type="text" autoComplete="name"
                className="acd-input" value={form.name}
                onChange={set("name")} onBlur={blur("name")}
                aria-required="true" aria-invalid={!!showErr("name")}
                aria-describedby={showErr("name") ? "name-err" : undefined} />
            </Field>

            <Field id="email" label="Email address" required error={showErr("email")}>
              <input id="email" name="email" type="email" autoComplete="email"
                inputMode="email" className="acd-input" value={form.email}
                onChange={set("email")} onBlur={blur("email")}
                aria-required="true" aria-invalid={!!showErr("email")}
                aria-describedby={showErr("email") ? "email-err" : undefined} />
            </Field>

            <Field id="mobile" label="Mobile number" hint="Optional"
              error={showErr("mobile")}>
              <input id="mobile" name="mobile" type="tel" autoComplete="tel"
                inputMode="tel" placeholder="+44 7465 278021" className="acd-input"
                value={form.mobile} onChange={set("mobile")} onBlur={blur("mobile")}
                aria-invalid={!!showErr("mobile")}
                aria-describedby={showErr("mobile") ? "mobile-err" : "mobile-hint"} />
            </Field>

            <Field id="country" label="Country" required error={showErr("country")}
              hint="Determines your payment currency">
              <select id="country" name="country" className="acd-input"
                value={form.country} onChange={set("country")} onBlur={blur("country")}
                aria-required="true" aria-invalid={!!showErr("country")}
                aria-describedby={showErr("country") ? "country-err" : "country-hint"}>
                <option value="">Select your country</option>
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
            </Field>
          </fieldset>

          {/* Background */}
          <fieldset className="acd-fs">
            <legend className="acd-legend">Background</legend>

            <RadioGroup
              name="qualification" label="Highest qualification" required
              options={QUALIFICATIONS} value={form.qualification}
              onChange={(v) => setForm((f) => ({ ...f, qualification: v }))}
              error={showErr("qualification")}
            />
            {form.qualification === "Other" ? (
              <Field id="qualificationOther" label="Please specify your qualification"
                required error={showErr("qualificationOther")}>
                <input id="qualificationOther" type="text" className="acd-input"
                  value={form.qualificationOther}
                  onChange={set("qualificationOther")} onBlur={blur("qualificationOther")}
                  aria-required="true" aria-invalid={!!showErr("qualificationOther")}
                  aria-describedby={showErr("qualificationOther") ? "qualificationOther-err" : undefined} />
              </Field>
            ) : null}

            <RadioGroup
              name="experience" label="Total work experience" required
              options={EXPERIENCE} value={form.experience}
              onChange={(v) => setForm((f) => ({ ...f, experience: v }))}
              error={showErr("experience")}
            />

            <Field id="linkedin" label="LinkedIn profile" hint="Optional"
              error={showErr("linkedin")}>
              <input id="linkedin" type="url" inputMode="url"
                placeholder="https://linkedin.com/in/yourname" className="acd-input"
                value={form.linkedin} onChange={set("linkedin")} onBlur={blur("linkedin")}
                aria-invalid={!!showErr("linkedin")}
                aria-describedby={showErr("linkedin") ? "linkedin-err" : "linkedin-hint"} />
            </Field>
          </fieldset>

          {/* Programme */}
          <fieldset className="acd-fs">
            <legend className="acd-legend">Programme</legend>

            <RadioGroup
              name="programme" label="Programme choice" required
              options={PROGRAMMES} value={form.programme}
              onChange={(v) => setForm((f) => ({ ...f, programme: v }))}
              error={showErr("programme")}
            />
            {form.programme === "Other" ? (
              <Field id="programmeOther" label="Please specify the programme" required
                error={showErr("programmeOther")}>
                <input id="programmeOther" type="text" className="acd-input"
                  value={form.programmeOther}
                  onChange={set("programmeOther")} onBlur={blur("programmeOther")}
                  aria-required="true" aria-invalid={!!showErr("programmeOther")}
                  aria-describedby={showErr("programmeOther") ? "programmeOther-err" : undefined} />
              </Field>
            ) : null}

            <Field id="subjectArea" label="Preferred title / subject area" required
              error={showErr("subjectArea")}
              hint="e.g. “Sustainable supply chains in emerging markets”">
              <input id="subjectArea" type="text" className="acd-input"
                value={form.subjectArea} onChange={set("subjectArea")}
                onBlur={blur("subjectArea")} aria-required="true"
                aria-invalid={!!showErr("subjectArea")}
                aria-describedby={showErr("subjectArea") ? "subjectArea-err" : "subjectArea-hint"} />
            </Field>

            <Field id="purpose" label="Purpose" hint="Optional — why do you want to do this doctorate programme?">
              <textarea id="purpose" className="acd-input acd-textarea" rows={4}
                value={form.purpose} onChange={set("purpose")}
                aria-describedby="purpose-hint" />
            </Field>

            <Field id="resume" label="Resume" hint="Optional — PDF, up to 5 MB."
              error={resumeErr}>
              <input id="resume" type="file" accept="application/pdf"
                className="acd-input acd-file" onChange={onResume}
                aria-invalid={!!resumeErr}
                aria-describedby={resumeErr ? "resume-err" : "resume-hint"} />
            </Field>
          </fieldset>
        </form>

        {/* Summary + pay */}
        <aside className="acd-card acd-summary" aria-labelledby="sum-h">
          <h2 id="sum-h" className="acd-h2">Summary</h2>

          <dl className="acd-dl">
            <div><dt>Programme</dt><dd>{programmeLabel || "—"}</dd></div>
            <div><dt>Subject area</dt><dd>{form.subjectArea.trim() || "—"}</dd></div>
            <div><dt>Country</dt><dd>{country?.label || "—"}</dd></div>
            <div>
              <dt>Payment method</dt>
              <dd>{country ? (country.provider === "stripe" ? "Card (Stripe)" : "Razorpay") : "—"}</dd>
            </div>
          </dl>

          <div className="acd-fee">
            <span>Application fee</span>
            <strong>
              {country
                ? `${country.symbol}${(country.amount / 100).toLocaleString("en-US", { minimumFractionDigits: 2 })} ${country.currency}`
                : "—"}
            </strong>
          </div>
          <p className="acd-note">
            {/* PLUG:FEES — refund guarantee. Keep this wording aligned with
                /refund-policy before changing it. */}
            One-time application fee — <strong>fully refundable</strong> if AcdyOn
            does not issue your provisional admission certificate.
          </p>

          {/* Live region: announces loading / error to screen readers. */}
          <div className="acd-status" role="status" aria-live="polite"
            ref={statusRef} tabIndex={-1}>
            {status === "paying" ? "Opening secure payment…" : null}
            {status === "verifying" ? "Verifying your payment…" : null}
          </div>

          {status === "error" && errorMsg ? (
            <p className="acd-alert" role="alert">{errorMsg}</p>
          ) : null}

          {!isValid && Object.keys(touched).length > 0 ? (
            <p className="acd-note acd-note-warn">
              Complete the highlighted fields to continue.
            </p>
          ) : null}

          {/* Button lives outside <form> (sticky sidebar); Enter inside the form
              still submits via the form's onSubmit handler. */}
          <button type="button" onClick={handlePay}
            className="acd-btn acd-btn-primary"
            disabled={!isValid || busy}
            aria-disabled={!isValid || busy}>
            {busy ? "Processing…" : status === "error" ? "Retry payment" : "Pay and submit"}
          </button>

          <p className="acd-fine">
            Payments are processed by {country?.provider === "razorpay" ? "Razorpay" : "Stripe"}.
            AcdyOn never sees or stores your card details.
          </p>
        </aside>
      </div>

      {/* Partner logos. Reuses the global .marquee keyframes from app/globals.css. */}
      <section className="acd-logos" aria-label="Partner universities">
        <p className="acd-logos-title">Our university partners</p>
        <div className="acd-logos-mask">
          <div className="marquee acd-logos-track">
            {[...partnerUniversities, ...partnerUniversities].map((u, i) => (
              <div className="acd-logo" key={`${u.name}-${i}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={u.logo} alt={i < partnerUniversities.length ? u.name : ""}
                  aria-hidden={i >= partnerUniversities.length ? "true" : undefined}
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ────────────────────────────────────────────────────────────
   Small presentational pieces
   ──────────────────────────────────────────────────────────── */

function Field({ id, label, required, hint, error, children }) {
  return (
    <div className="acd-field">
      <label htmlFor={id} className="acd-label">
        {label}
        {required ? <span aria-hidden="true" className="acd-req"> *</span> : null}
        {required ? <span className="acd-sr"> (required)</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="acd-hint">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${id}-err`} className="acd-err">{error}</p>
      ) : null}
    </div>
  );
}

function RadioGroup({ name, label, options, value, onChange, required, error }) {
  return (
    <fieldset className="acd-field acd-radios"
      aria-required={required ? "true" : undefined}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={error ? `${name}-err` : undefined}>
      <legend className="acd-label">
        {label}
        {required ? <span aria-hidden="true" className="acd-req"> *</span> : null}
        {required ? <span className="acd-sr"> (required)</span> : null}
      </legend>
      <div className="acd-radio-row">
        {options.map((opt) => {
          const id = `${name}-${opt.replace(/\W+/g, "-").toLowerCase()}`;
          return (
            <label key={opt} htmlFor={id} className="acd-radio">
              <input id={id} type="radio" name={name} value={opt}
                checked={value === opt} onChange={() => onChange(opt)} />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
      {error ? <p id={`${name}-err`} className="acd-err">{error}</p> : null}
    </fieldset>
  );
}

/* ────────────────────────────────────────────────────────────
   PLUG:THEME — CSS variables mirroring app/globals.css tokens.
   `.dark` on <html> (set by next-themes) flips the palette.
   ──────────────────────────────────────────────────────────── */
function Styles() {
  return (
    <style>{`
.acd-reg {
  --acd-royal: #1E40FF;
  --acd-gold: #D4AF37;
  --acd-bg: #ffffff;
  --acd-surface: #F8FAFC;
  --acd-fg: #020617;
  --acd-muted: #64748B;
  --acd-border: #E2E8F0;
  --acd-danger: #DC2626;
  --acd-radius: 8px;
  max-width: 1180px;
  margin: 0 auto;
  /* top padding clears the fixed site navbar from app/layout.tsx */
  padding: clamp(6.5rem, 9vw, 8rem) 1.25rem 5rem;
  color: var(--acd-fg);
  font-family: var(--font-inter, ui-sans-serif, system-ui, sans-serif);
}
:where(.dark) .acd-reg {
  --acd-royal: #5B7DFF;
  --acd-gold: #E8C468;
  --acd-bg: #020617;
  --acd-surface: #0F1B30;
  --acd-fg: #F8FAFC;
  --acd-muted: #94A3B8;
  --acd-border: rgba(255,255,255,0.12);
  --acd-danger: #F87171;
}
.acd-head { display:flex; gap:1rem; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; margin-bottom:2.5rem; }
.acd-eyebrow { font-size:.7rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--acd-gold); margin:0 0 .75rem; }
.acd-h1 { font-family: var(--font-playfair, Georgia, serif); font-size:clamp(1.9rem,4vw,2.75rem); line-height:1.15; margin:0; }
.acd-h2 { font-size:1.05rem; font-weight:700; margin:0 0 1rem; }
.acd-lede { margin:.9rem 0 0; max-width:58ch; color:var(--acd-muted); line-height:1.7; font-size:.95rem; }
.acd-theme { border:1px solid var(--acd-border); background:transparent; color:var(--acd-fg); border-radius:999px; padding:.5rem 1rem; font-size:.8rem; cursor:pointer; }

.acd-grid { display:grid; gap:1.5rem; align-items:start; }
@media (min-width: 960px) { .acd-grid { grid-template-columns: 1.6fr 1fr; } .acd-summary { position: sticky; top: 6rem; } }

.acd-card { background:var(--acd-bg); border:1px solid var(--acd-border); border-radius:var(--acd-radius); padding:clamp(1.25rem,3vw,2rem); }
.acd-fs { border:0; padding:0; margin:0 0 2rem; }
.acd-fs:last-child { margin-bottom:0; }
.acd-legend { font-size:.7rem; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--acd-muted); padding:0; margin-bottom:1.15rem; }

.acd-field { margin-bottom:1.25rem; border:0; padding:0; }
.acd-label { display:block; font-size:.875rem; font-weight:600; margin-bottom:.45rem; padding:0; }
.acd-req { color:var(--acd-danger); }
.acd-sr { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }
.acd-input {
  width:100%; height:3rem; padding:0 .9rem; font-size:.925rem; color:var(--acd-fg);
  background:var(--acd-bg); border:1px solid var(--acd-border); border-radius:var(--acd-radius);
  outline:none; transition:border-color .15s, box-shadow .15s;
}
select.acd-input { padding-right:2rem; }
.acd-input:focus-visible { border-color:var(--acd-royal); box-shadow:0 0 0 3px color-mix(in srgb, var(--acd-royal) 22%, transparent); }
.acd-input[aria-invalid="true"] { border-color:var(--acd-danger); }
.acd-hint { margin:.4rem 0 0; font-size:.78rem; color:var(--acd-muted); }
.acd-err { margin:.4rem 0 0; font-size:.78rem; font-weight:500; color:var(--acd-danger); }

.acd-radio-row { display:flex; flex-wrap:wrap; gap:.6rem; }
.acd-radio { display:inline-flex; align-items:center; gap:.55rem; padding:.65rem .95rem; border:1px solid var(--acd-border); border-radius:var(--acd-radius); font-size:.875rem; cursor:pointer; transition:border-color .15s, background .15s; }
.acd-radio:hover { border-color:color-mix(in srgb, var(--acd-royal) 45%, transparent); }
.acd-radio input { accent-color:var(--acd-royal); width:1rem; height:1rem; margin:0; }
.acd-radio:has(input:checked) { border-color:var(--acd-royal); background:color-mix(in srgb, var(--acd-royal) 8%, transparent); }
.acd-radio:has(input:focus-visible) { box-shadow:0 0 0 3px color-mix(in srgb, var(--acd-royal) 22%, transparent); }

.acd-summary { background:var(--acd-surface); }
.acd-dl { margin:0 0 1.25rem; display:grid; gap:.75rem; }
.acd-dl > div { display:flex; justify-content:space-between; gap:1rem; font-size:.875rem; }
.acd-dl dt { color:var(--acd-muted); }
.acd-dl dd { margin:0; font-weight:600; text-align:right; }
.acd-fee { display:flex; justify-content:space-between; align-items:baseline; gap:1rem; padding-top:1rem; border-top:1px solid var(--acd-border); font-size:.9rem; }
.acd-fee strong { font-size:1.35rem; font-family:var(--font-playfair, Georgia, serif); }
.acd-textarea { min-height:6.5rem; resize:vertical; font:inherit; }
.acd-file { padding:.55rem .75rem; font-size:.85rem; }
.acd-file::file-selector-button { margin-right:.75rem; padding:.35rem .75rem; font:inherit;
  border:1px solid var(--acd-border); border-radius:var(--acd-radius);
  background:var(--acd-bg); color:var(--acd-fg); cursor:pointer; }
.acd-logos { margin-top:3rem; }
.acd-logos-title { margin:0 0 1rem; text-align:center; font-size:.75rem; letter-spacing:.18em;
  text-transform:uppercase; color:var(--acd-muted); }
.acd-logos-mask { overflow:hidden; }
.acd-logos-track { display:flex; width:max-content; gap:1rem; }
.acd-logo { display:flex; align-items:center; justify-content:center; height:4rem; width:11rem;
  flex:none; padding:.75rem 1.25rem; border:1px solid var(--acd-border);
  border-radius:var(--acd-radius); background:var(--acd-surface); }
.acd-logo img { max-height:100%; max-width:100%; object-fit:contain; }
.acd-note { margin:.5rem 0 0; font-size:.78rem; color:var(--acd-muted); }
.acd-note-warn { color:var(--acd-danger); }
.acd-status { min-height:0; font-size:.85rem; color:var(--acd-muted); }
.acd-status:not(:empty) { margin-top:1rem; }
.acd-alert { margin:1rem 0 0; padding:.75rem .9rem; border-radius:var(--acd-radius); font-size:.85rem; color:var(--acd-danger); border:1px solid color-mix(in srgb, var(--acd-danger) 40%, transparent); background:color-mix(in srgb, var(--acd-danger) 8%, transparent); }

.acd-btn { display:inline-flex; align-items:center; justify-content:center; width:100%; height:3rem; margin-top:1.25rem; border:0; border-radius:var(--acd-radius); font-size:.925rem; font-weight:600; cursor:pointer; text-decoration:none; transition:opacity .15s, background .15s; }
.acd-btn:focus-visible { outline:3px solid color-mix(in srgb, var(--acd-royal) 45%, transparent); outline-offset:2px; }
.acd-btn-primary { background:var(--acd-royal); color:#fff; }
.acd-btn-primary:disabled { opacity:.5; cursor:not-allowed; }
.acd-btn-ghost { background:transparent; color:var(--acd-fg); border:1px solid var(--acd-border); max-width:14rem; }
.acd-fine { margin:.85rem 0 0; font-size:.72rem; line-height:1.6; color:var(--acd-muted); }

.acd-done { max-width:36rem; margin:0 auto; text-align:center; }
.acd-done:focus { outline:none; }
.acd-ref code { font-size:.85rem; background:var(--acd-surface); padding:.25rem .5rem; border-radius:4px; }

@media (prefers-reduced-motion: reduce) {
  .acd-reg .marquee { animation: none; } .acd-reg * { transition:none !important; animation:none !important; } }
`}</style>
  );
}
