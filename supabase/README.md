# Supabase — intake game

Apply the migration in `migrations/20260811010000_intake_leads.sql` to your project:

```bash
npx supabase link --project-ref <your-ref>
npx supabase db push
```

Or paste the SQL in the Supabase SQL editor.

Required env vars (see root `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (unused by server paths today; reserved)
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY` (Whisper + brief)
- `RESEND_API_KEY` + `INTAKE_NOTIFY_EMAIL` (email prep call)
