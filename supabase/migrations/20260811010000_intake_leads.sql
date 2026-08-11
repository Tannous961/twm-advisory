-- Intake leads for /demarrer game journey
create extension if not exists "pgcrypto";

create table if not exists public.intake_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lang text not null check (lang in ('fr', 'en')),
  intent text not null,
  answers jsonb not null default '{}'::jsonb,
  score integer not null check (score >= 0 and score <= 100),
  entry_offer text not null,
  name text not null,
  email text not null,
  company text,
  signal_text text,
  video_path text,
  transcript text,
  brief_md text,
  consent_at timestamptz not null,
  status text not null default 'received'
    check (status in ('received', 'briefed', 'emailed'))
);

create index if not exists intake_leads_created_at_idx
  on public.intake_leads (created_at desc);

alter table public.intake_leads enable row level security;

-- Deny-all for anon/authenticated: only service_role (server) reads/writes.
revoke all on table public.intake_leads from anon, authenticated;
grant all on table public.intake_leads to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'intake-videos',
  'intake-videos',
  false,
  52428800,
  array['video/webm', 'video/mp4', 'video/quicktime']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- No storage policies for anon/authenticated — uploads go through signed URLs
-- minted by the service role on the server.
