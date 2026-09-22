# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: directions générales (executive teams) who need to set performance priorities and see them through to measured results, without hiring a permanent AI lead or buying slideware.

Secondary audiences the site may still address: law firms, consulting & audit, accounting firms, and operating organizations. They are not the default acquisition focus.

## Product Purpose

TWM Advisory’s public site is the marketing and acquisition surface for an Operating Performance Partner. Visitors submit a performance priority, go through a short qualification briefing (`/demarrer`), and book a meeting. Success for the product is a booked appointment first; a qualified brief submitted is the supporting step that feeds the conversation.

## Positioning

Forward Deployed Engineer posture: Tannous Mekari works with the client’s teams on site, from an operational priority through to measured economic results (cost, capacity, margin), validated with finance. Neighboring “AI advisory” that stops at decks or strategy decks without execution cannot truthfully claim this.

## Operating Context

- Site bilingual FR (default) / EN (`?lang=en` + localStorage).
- Main conversion path: home and marketing pages → CTA → `/demarrer` (intent → micro-challenges → maturity score → video or text signal → identity + consent → AI brief + email) → Calendly booking.
- Secondary paths: Signal editorial, partners/BD form (`/partenaires`), soft contact.
- Internal ops: Supabase leads + video storage, OpenRouter/OpenAI for brief + STT, Resend notify to `INTAKE_NOTIFY_EMAIL`, Calendly for scheduling.
- Live domain: `https://www.twm.expert`.

## Capabilities and Constraints

- Five fixed offer tracks (assessment, agent deployment, existing-system evaluation, strategy/governance including fractional AI leadership, training & awareness). No invented prices or durations.
- Partner page supports BD types (referrer / tech / métier / co-delivery / other) under written commercial agreement only. No invented partner logos.
- Confidentiality and privilege matter for legal and professional audiences; client data and secrets must not be exposed in public copy or examples.
- Supabase access for leads is service-role server-only (RLS deny-all for anon/authenticated).
- No custom admin dashboard; leads are read via Supabase Studio.
- Calendly webhook → lead `booked` status is not implemented yet.
- Undecided / open: nothing material beyond known engineering gaps in `PROJECT.md`.

## Brand Commitments

- Name: **TWM Advisory**.
- Tagline / role: **Operating Performance Partner**.
- Founder face of the offer: **Tannous Mekari**.
- Voice: direct, field-oriented, FR/EN; prefer concrete facts (see project skill `signes-ecriture-ia`).
- Assets in repo: `public/logo.png`, `twm-logo-sig.png` / `@2x`, `public/uploads/` hero/about imagery.
- Contact / notify patterns anchored on `twm.expert` (see `.env.example`).

## Evidence on Hand

- Claimed stats in site copy: 17 years field experience, 15 agents in TWM architecture, 11 markets covered (`src/lib/content.ts`). Treat as committed claims already on the site; do not invent additional case studies, testimonials, client names, benchmarks, or press.
- Signal articles are seeded editorial content in `src/lib/signal.ts`.
- No customer testimonials or named case studies in the repo; future work must not fabricate them.

## Product Principles

1. Booked meeting beats vanity traffic; every surface should make the path to a qualified briefing and calendaring clearer, not denser.
2. Performance is the product language: cost, capacity, margin, measured outcomes — not generic “AI transformation.”
3. Execution posture stays visible: on-site, with the client’s teams, through production — not slide delivery.
4. Do not invent commercial or social proof; preserve confidentiality and written-agreement norms for partners and professional clients.
5. FR/EN parity for user-facing product copy; keep claims aligned across languages.

## Accessibility & Inclusion

Baseline web accessibility only (skip link, semantic structure, form errors, keyboard reachability). No elevated WCAG conformance target was set as a product requirement.
