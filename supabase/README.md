# Supabase — intake game + partner leads

Apply migrations in `migrations/` **before** expecting `/demarrer` to save leads.

```bash
npx supabase link --project-ref <your-ref>
npx supabase db push
```

Or paste each SQL file in the Supabase SQL editor (in order):

1. `20260811010000_intake_leads.sql` — client briefing leads + video bucket
2. `20260811020000_partner_leads.sql` — partnership / BD leads
3. `20260817123543_harden_lead_pipeline.sql` — session idempotency, status fields, rate-limit RPC

If production returns `Could not save lead`, the insert into `intake_leads` failed. Typical causes:

- migrations not applied (table/columns missing)
- `SUPABASE_SERVICE_ROLE_KEY` set to the **anon** key instead of **service_role**
- PostgREST schema cache stale after a manual SQL change (Supabase → Settings → API → Reload schema)

Required env vars (see root `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (unused by server paths today; reserved)
- `SUPABASE_SERVICE_ROLE_KEY` (**service_role** secret only)
- `OPENROUTER_API_KEY` or `OPENAI_API_KEY` (Whisper + brief)
- `RESEND_API_KEY` + `INTAKE_NOTIFY_EMAIL` (email prep call / partner proposals)
