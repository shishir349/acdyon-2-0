-- A2P 10DLC / SMS campaign compliance: record consent status with each submission.
-- Not yet wired into the direct insert in lib/supabase.ts (consent is already mirrored
-- to the CRM via lib/crm.ts extra.sms_consent) — add `sms_consent` to that insert payload
-- once this migration has run against prod.
alter table if exists public.consultation_requests
  add column if not exists sms_consent boolean not null default false;

alter table if exists public.contact_submissions
  add column if not exists sms_consent boolean not null default false;

alter table if exists public.website_leads
  add column if not exists sms_consent boolean not null default false;
