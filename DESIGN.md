---
name: TWM Advisory
description: Forward Ops Desk — classy premium operating performance on dark copper night surfaces
colors:
  night-ink: "#070A11"
  parchment-fg: "#F2EFEA"
  copper: "#B87333"
  copper-soft: "#E3AC6C"
  steel-muted: "#98A1B3"
  steel-muted-2: "#778093"
  steel-muted-3: "#5D6579"
  hairline: "rgba(255, 255, 255, 0.08)"
  panel: "#080C15"
  panel-raised: "#0C1220"
  ink-on-accent: "#070A11"
  copper-glow: "rgba(184, 115, 51, 0.14)"
  copper-selection: "rgba(184, 115, 51, 0.35)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 9vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 7vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 6.5vw, 3.375rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  full: "999px"
  card: "1.5rem"
  none: "0"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4.5rem"
  9: "7rem"
  page-pad: "clamp(1rem, 4vw, 2.5rem)"
  section-y: "clamp(4rem, 10vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.copper-soft}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.parchment-fg}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  glass-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.parchment-fg}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  section-label:
    textColor: "{colors.copper}"
    typography: "{typography.label}"
---

# Design System: TWM Advisory

## Overview

**Creative North Star: "The Forward Ops Desk"**

The interface reads as a forward-deployed command surface: dark night field, copper mandate accent, editorial display type for the claim, and mono labels for the operational layer. It should feel classy and premium without luxury theatrics — quiet authority for a DG deciding to book a briefing.

Density stays deliberate. Sections breathe (`section-y`), hero claims sit large in Playfair, supporting copy stays Inter, and section chrome / CTAs lean JetBrains Mono. Depth is tonal and glassy, not shadowed furniture.

**Key Characteristics:**
- Default theme **Bronze** (`#B87333` on `#070A11`); alternate themes exist for A/B but Bronze is signature.
- Pill CTAs, glass/hairline panels, uppercase mono section marks (`§ 01`).
- Operational dryness: quasi-flat surfaces, minimal hover lift (`-1px`), no decorative shadow stacks.
- Motion: short ease-out rises and reveals; honor `prefers-reduced-motion`.

## Colors

A night-ops palette: near-black ink field, warm parchment text, copper accent used sparingly as the mandate signal.

### Primary
- **Copper** (`#B87333` / `--accent`): primary CTAs, active marks, focus accents, brand signal. Soft companion **Copper Soft** (`#E3AC6C` / `--accent-soft`) for hover and secondary emphasis.

### Neutral
- **Night Ink** (`#070A11` / `--bg`): page field and ink-on-accent text.
- **Parchment** (`#F2EFEA` / `--fg`): primary text on dark.
- **Panel / Panel Raised** (`#080C15` / `#0C1220`): card and nested surface tones.
- **Steel Muted** (`#98A1B3`, `#778093`, `#5D6579`): secondary and tertiary copy.
- **Hairline** (`rgba(255,255,255,0.08)` / `--line`): default borders and rules.

### Named Rules
**The Copper Rarity Rule.** Copper is the mandate color, not a wash. Prefer accent on CTAs, labels, and thin signals (`surface-accent` left bar, focus rings) — not large filled backgrounds.

**The Theme Switch Rule.** Live theme swaps (`bronze|gold|steel|emerald|wine|sand`) remaps the same semantic tokens. New work must use semantic vars (`--bg`, `--fg`, `--accent`, `--panel`, `--line`, `--muted*`), never hard-code Bronze hex outside the theme table.

## Typography

**Display Font:** Playfair Display (Georgia fallback)  
**Body Font:** Inter (system-ui fallback)  
**Label/Mono Font:** JetBrains Mono (ui-monospace fallback)

**Character:** Editorial claim (serif display) over operational body (sans), with mono as the “ops chrome” for labels, captions, skip link, and section indices.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 9vw, 5.5rem)`, lh 1.02, tracking `-0.03em`): hero-scale claims only.
- **Headline / H1** (400, `clamp(2.25rem, 7vw, 4.25rem)`, lh 1.08): page heroes.
- **Title / H2–H3** (400, h2 `clamp(2rem, 6.5vw, 3.375rem)` / h3 `clamp(1.5rem, 3.5vw, 2.125rem)`): section titles.
- **Body** (400, `1.0625rem` / 17px, lh 1.72): default reading; lead uses `clamp(1.0625rem, 2.5vw, 1.3125rem)`.
- **Label / Caption** (mono, 13px / 12px, uppercase, tracking `0.16em` / `0.14em`): section labels, meta, chrome.

### Named Rules
**The Two-Voice Rule.** Serif owns the claim; sans owns the explanation; mono owns the instrument panel. Do not set long body copy in Playfair or JetBrains.

## Layout

Content lives in `.content-wrap`: max width `80rem` (`--content-max`), horizontal pad `clamp(1rem, 4vw, 2.5rem)`, section vertical rhythm `clamp(4rem, 10vw, 7rem)`. Header height token `--header-h: 4rem`. Spacing scale `--space-1`…`--space-9` (0.25rem → 7rem). Full-bleed helpers exist for edge-to-edge bands. Prefer one job per section; keep the first viewport brand-led (PRODUCT conversion: book a briefing).

## Elevation & Depth

No `box-shadow` vocabulary in the global system. Depth comes from tonal stacking (bg → panel → panel-2), hairline borders, soft copper glow (`--glow`), and glass (`backdrop-filter: blur(12px)` on `.glass-card`). Buttons may lift `1px` on hover only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces stay flat at rest. Do not introduce multi-layer drop shadows or neon glows to fake premium.

## Shapes

- **Pills** (`border-radius: 999px`): primary/secondary buttons, skip link, scrollbar thumb.
- **Cards** (`rounded-3xl` ≈ `1.5rem`): `.glass-card` and marketing panels.
- **Rules:** 1px hairline borders and section divider lines; `surface-accent` uses a 2px copper left bar.

### Named Rules
**The Pill Mandate Rule.** Primary actions are pills. Do not square off CTAs or invent a second primary shape language.

## Components

### Buttons
Operational and dry: full pill, firm weight, tiny hover lift.
- **Shape:** full pill (`999px`)
- **Primary:** copper fill, ink text, `1px` copper border; hover → copper-soft, `translateY(-1px)`
- **Secondary:** transparent / glass-tinted, parchment text, copper-tinted border; hover → soft copper text + `rgb(accent / 0.08)` wash
- **Focus:** `2px` outline on parchment or copper-soft with offset

### Cards / Containers
- **Corner:** large soft (`rounded-3xl`)
- **Background:** glass panel mix or solid `--panel` (`.surface-panel`)
- **Border:** hairline `--line`; hover may tint border toward accent (`border-accent/25`–`/35`)
- **Shadow:** none by default
- **Padding:** typically `p-7`–`p-9`

### Inputs / Fields
Form fields inherit dark surfaces and copper-soft focus rings (`outline-offset: 2px`). Invalid state uses `aria-invalid` patterns in partnership/intake forms — keep errors concrete, not ornamental.

### Navigation
Header over dark field; brand mark dominant. Mono/uppercase chrome for utility labels. Mobile menu collapses; keep skip link as first focusable control.

### Section Label (signature)
`§ {index}` in copper mono + muted label + hairline rule. Recurring section opener — preserve the ops-index feel.

### Reveal / Splash
Scroll reveals fade/rise with `--ease-out` (`cubic-bezier(0.22, 0.61, 0.36, 1)`). Splash intro converges logo on black before revealing `.page-shell`. Reduced motion collapses animations.

## Do's and Don'ts

### Do:
- **Do** speak in semantic tokens (`--bg`, `--fg`, `--accent`, `--panel`, `--line`, `--muted*`) so theme switching stays valid.
- **Do** keep copper rare and CTA-led; measure success against booked briefing clarity.
- **Do** pair Playfair claims with Inter body and JetBrains labels.
- **Do** use glass + hairline for panels, pills for actions.
- **Do** respect `prefers-reduced-motion`.

### Don't:
- **Don't** invent purple/indigo SaaS gradients, cream+terracotta brochure looks, or broadsheet dense columns as the default world.
- **Don't** add multi-layer shadows, glow stacks, or bounce/elastic easing.
- **Don't** wrap everything in nested cards; cards are for interaction or clear panel grouping only.
- **Don't** hard-code Bronze hex in components when a semantic token exists.
- **Don't** invent testimonials, logos, or pricing visuals the product does not have.
