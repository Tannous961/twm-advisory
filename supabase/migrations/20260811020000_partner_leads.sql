-- Partner / BD leads from /partenaires
create table if not exists public.partner_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lang text not null check (lang in ('fr', 'en')),
  name text not null,
  email text not null,
  company text,
  partner_type text not null,
  message text not null,
  consent_at timestamptz not null,
  status text not null default 'received'
    check (status in ('received', 'emailed', 'archived'))
);

create index if not exists partner_leads_created_at_idx
  on public.partner_leads (created_at desc);

alter table public.partner_leads enable row level security;

revoke all on table public.partner_leads from anon, authenticated;
grant all on table public.partner_leads to service_role;
