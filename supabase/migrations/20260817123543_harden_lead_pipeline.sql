-- Phase 1: reliable lead processing and server-side API rate limits.

alter table public.intake_leads
  drop constraint if exists intake_leads_status_check;

alter table public.intake_leads
  add column if not exists brief_status text not null default 'pending'
    check (brief_status in ('pending', 'completed', 'fallback', 'failed')),
  add column if not exists notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed', 'skipped')),
  add column if not exists confirmation_status text not null default 'pending'
    check (confirmation_status in ('pending', 'sent', 'failed', 'skipped')),
  add column if not exists processing_attempts integer not null default 0
    check (processing_attempts >= 0),
  add column if not exists processing_error text;

update public.intake_leads
set
  status = case
    when status = 'emailed' then 'completed'
    when status = 'briefed' then 'partial'
    else status
  end,
  brief_status = case
    when status in ('briefed', 'emailed') then 'completed'
    else brief_status
  end,
  notification_status = case
    when status = 'emailed' then 'sent'
    when status = 'briefed' then 'skipped'
    else notification_status
  end,
  confirmation_status = case
    when status in ('briefed', 'emailed') then 'skipped'
    else confirmation_status
  end;

alter table public.intake_leads
  add constraint intake_leads_status_check
  check (status in ('received', 'processing', 'completed', 'partial', 'failed'));

alter table public.partner_leads
  drop constraint if exists partner_leads_status_check;

alter table public.partner_leads
  add column if not exists notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed', 'skipped')),
  add column if not exists confirmation_status text not null default 'pending'
    check (confirmation_status in ('pending', 'sent', 'failed', 'skipped')),
  add column if not exists processing_attempts integer not null default 0
    check (processing_attempts >= 0),
  add column if not exists processing_error text;

update public.partner_leads
set
  status = case when status = 'emailed' then 'completed' else status end,
  notification_status = case
    when status = 'emailed' then 'sent'
    else notification_status
  end,
  confirmation_status = case
    when status = 'emailed' then 'skipped'
    else confirmation_status
  end;

alter table public.partner_leads
  add constraint partner_leads_status_check
  check (status in ('received', 'processing', 'completed', 'partial', 'failed', 'archived'));

create table if not exists public.api_rate_limits (
  bucket_key text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1 check (request_count > 0)
);

alter table public.api_rate_limits enable row level security;
revoke all on table public.api_rate_limits from public, anon, authenticated;
grant all on table public.api_rate_limits to service_role;

create or replace function public.consume_api_rate_limit(
  p_bucket_key text,
  p_window_seconds integer,
  p_max_requests integer
)
returns boolean
language plpgsql
security invoker
set search_path = ''
as $$
declare
  accepted boolean;
begin
  if p_window_seconds < 1 or p_max_requests < 1 then
    raise exception 'Rate-limit window and maximum must be positive';
  end if;

  insert into public.api_rate_limits as limits (
    bucket_key,
    window_started_at,
    request_count
  )
  values (p_bucket_key, now(), 1)
  on conflict (bucket_key) do update
    set window_started_at = case
          when limits.window_started_at <= now() - make_interval(secs => p_window_seconds)
            then now()
          else limits.window_started_at
        end,
        request_count = case
          when limits.window_started_at <= now() - make_interval(secs => p_window_seconds)
            then 1
          else limits.request_count + 1
        end
    where
      limits.window_started_at <= now() - make_interval(secs => p_window_seconds)
      or limits.request_count < p_max_requests
  returning true into accepted;

  return coalesce(accepted, false);
end;
$$;

revoke execute on function public.consume_api_rate_limit(text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.consume_api_rate_limit(text, integer, integer)
  to service_role;
