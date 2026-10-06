-- Programme registrations (app/register). Written client-side with the anon key,
-- so inserts are open and reads are not.
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  country text not null,
  qualification text,
  experience text,
  programme text,
  linkedin text,
  subject_area text,
  purpose text,
  resume_url text,
  status text not null default 'awaiting_payment'
);

alter table public.registrations enable row level security;

create policy "anon can insert registrations"
  on public.registrations for insert to anon with check (true);

-- Resume bucket: public read (URLs are stored on the row), anon upload only.
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', true)
on conflict (id) do nothing;

create policy "anon can upload resumes"
  on storage.objects for insert to anon
  with check (bucket_id = 'resumes');
