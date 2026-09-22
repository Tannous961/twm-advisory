<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## Wording

Apply `.claude/skills/signes-ecriture-ia` (WP:AISIGNS) to all user-facing copy (FR/EN):
- Prefer concrete facts over generic emphasis.
- Prefer *est / a* over *constitue / représente*.
- Avoid AI vocabulary piles, trailing participles, "not X but Y", forced triplets, and em dashes for punch.
- Do not leave assistant filler in shipped text.

## Skills

Project skills live under `.claude/skills/`, `.agents/skills/`, and (Cursor) `.cursor/skills/`. Locked versions: `skills-lock.json`.

- **signes-ecriture-ia** — wording (see above).
- **web-animation-skills** ([iart-ai/web-animation-skills](https://github.com/iart-ai/web-animation-skills)) — GSAP, 60fps, page transitions, reduced-motion, micro-interactions, glassmorphism, SVG, Lottie, ASCII.
- **impeccable** ([pbakaus/impeccable](https://github.com/pbakaus/impeccable)) — design craft (`/impeccable init`, `polish`, `audit`, `critique`, …). Cursor hook: `.cursor/hooks.json`.

Refresh: `npx skills update` · `npx impeccable update` (or re-copy from the [universal.zip](https://github.com/pbakaus/impeccable/releases) release if the CLI zip download fails).
