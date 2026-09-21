---
name: TWM Advisory
description: Extreme Modern Slab — copper glass mandate floating on full-bleed night photography
colors:
  night-ink: "#0B0D10"
  parchment-fg: "#F2EFEA"
  copper: "#B87333"
  copper-soft: "#E3AC6C"
  steel-muted: "#98A1B3"
  steel-muted-2: "#778093"
  steel-muted-3: "#5D6579"
  hairline: "rgba(255, 255, 255, 0.08)"
  panel: "#12151C"
  panel-raised: "#181C26"
  ink-on-accent: "#0B0D10"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.08
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.16em"
rounded:
  slab: "1.25rem"
  control: "0.35rem"
  full: "999px"
spacing:
  page-pad: "clamp(1rem, 4vw, 2.5rem)"
  section-y: "clamp(4rem, 10vw, 7rem)"
components:
  button-slab:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.control}"
    padding: "1rem 2rem"
  mandate-slab:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.parchment-fg}"
    rounded: "{rounded.slab}"
    padding: "2rem"
---

# Design System: TWM Advisory

## Overview

**Creative North Star: "Extreme Modern Slab"**

The first impression is a floating copper glass mandate over a full-bleed night city-office photograph. The slab carries the brand, the claim, and one rectangular copper action. Everything else stays quiet.

This replaces the earlier Mandate Desk / blotter world. Negative space, photographic atmosphere, and a single glass object beat parchment panels and ops-plate stacks in the hero.

**Key Characteristics:**
- Full-bleed photography as the hero ground
- Translucent copper-edged glass slab (`.mandate-slab`) for conversion copy
- Rectangular copper CTA (`.btn-slab`), not pills, in hero/CTA band
- Display: Bricolage Grotesque · Body: Public Sans · Labels: JetBrains Mono
- Copper stays rare; no eyebrow marketing pills in the hero

## Colors

Night photographic ground with copper as the only warm signal.

### Primary
- **Copper** (`#B87333`): slab edge, labels, rectangular CTAs
- **Copper Soft** (`#E3AC6C`): hover

### Neutral
- **Night Ink** (`#0B0D10`): page field and slab mix base
- **Parchment FG** (`#F2EFEA`): text on dark
- **Steel Muted** ladder for secondary copy
- **Hairline** for borders

### Named Rules
**The Slab Rule.** The first viewport’s conversion content lives inside one glass slab — not a blotter card grid.

**The Copper Rarity Rule.** Copper marks action and identity; it does not wash large backgrounds.

## Typography

**Display:** Bricolage Grotesque  
**Body:** Public Sans  
**Label:** JetBrains Mono

### Named Rules
**The Two-Voice Rule.** Grotesque owns the claim; Public Sans owns the explanation; mono owns ops chrome.

## Layout

Hero is full viewport height. Slab sits asymmetrically with breathing room. Content wrap max `80rem`. No decorative column grid behind the page shell.

## Elevation & Depth

Depth comes from photography, slab blur (`backdrop-filter: blur(18px)`), and a soft ambient shadow under the slab — not multi-layer card shadows.

## Shapes

- Slab radius `1.25rem`
- Slab CTA radius `0.35rem` (near-rect)
- Legacy pills may remain on secondary site chrome; conversion surfaces prefer `.btn-slab`

## Components

### Mandate Slab
Glass panel over photo: copper-tinted border, blur, claim, lead, rectangular CTA, text secondary.

### Buttons
- **Slab primary:** copper fill, sharp corner, ink text
- Site-wide `.btn-primary` pills may still appear on older surfaces until migrated

## Do's and Don'ts

### Do:
- **Do** keep the hero full-bleed photo + one slab
- **Do** use semantic tokens for theme safety
- **Do** lead with booking / submit priority

### Don't:
- **Don't** return to parchment blotter as the home hero
- **Don't** stack glass cards in the first viewport
- **Don't** use purple SaaS gradients or Inter/Playfair defaults
