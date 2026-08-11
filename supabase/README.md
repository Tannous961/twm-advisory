# Supabase — intake game + partner leads

Apply migrations in `migrations/`:

```bash
npx supabase link --project-ref <your-ref>
npx supabase db push
```

Or paste each SQL file in the Supabase SQL editor (in order).

- `20260811010000_intake_leads.sql` — client briefing leads + video bucket
- `20260811020000_partner_leads.sql` — partnership / BD leads

Required env vars (see root `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (unused by server paths today; reserved)
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENROUTER_API_KEY` or `OPENAI_API_KEY` (Whisper + brief)
- `RESEND_API_KEY` + `INTAKE_NOTIFY_EMAIL` (email prep call / partner proposals)
