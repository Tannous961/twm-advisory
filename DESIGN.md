---
name: TWM Advisory
description: Mandate Desk × Ops Floor — parchment mandate on ink desk with copper seal and operational readouts
colors:
  desk-ink: "#0B0D10"
  parchment: "#EDE6D9"
  parchment-ink: "#1A1712"
  parchment-muted: "#5C564A"
  copper: "#B87333"
  copper-soft: "#E3AC6C"
  steel-muted: "#98A1B3"
  steel-muted-2: "#778093"
  hairline: "rgba(255, 255, 255, 0.08)"
  panel: "#12151C"
  panel-raised: "#181C26"
typography:
  display:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(2.75rem, 9vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
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
  full: "999px"
  desk: "1.25rem"
spacing:
  page-pad: "clamp(1rem, 4vw, 2.5rem)"
  section-y: "clamp(4rem, 10vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.desk-ink}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
  mandate-blotter:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.parchment-ink}"
    rounded: "{rounded.desk}"
  ops-plate:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.desk-ink}"
    rounded: "{rounded.desk}"
---

# Design System: TWM Advisory

## Overview

**Creative North Star: "Mandate Desk × Ops Floor"**

The site reads as a director’s mandate desk with an operational floor inset. Parchment carries the claim and the copper seal CTA. Dark ink surrounds it. Three ops plates (coût / capacité / marge) prove the Forward Deployed method without marketing-stat theater.

**Key Characteristics:**
- Literata (mandate) + Public Sans (body) + JetBrains Mono (ops)
- Parchment blotter `#EDE6D9` on desk ink `#0B0D10`
- Copper as seal and rare signal only
- Desk radius `1.25rem`; pill CTAs; no nested glass card grids in the hero
- Conversion first: submit priority → book RDV

## Colors

### Primary
- **Copper** (`#B87333`): seal CTA, labels, thin rules

### Neutral
- **Desk Ink** (`#0B0D10`): page field
- **Parchment** (`#EDE6D9` / ink `#1A1712`): mandate planes
- **Panel** (`#12151C`): ops plates

### Named Rules
**The Seal Rule.** Copper is for action and ticks, not washes.  
**The Blotter Rule.** Persuade moments live on parchment; ops evidence lives on dark panels.

## Typography

**Display:** Literata · **Body:** Public Sans · **Ops:** JetBrains Mono

**The Two-Surface Rule.** Serif owns the mandate; sans owns explanation; mono owns instrument labels.

## Layout

Content wrap `80rem`. Hero is asymmetric blotter + ops stack. Sections use hairline rails, not card mosaics.

## Elevation & Depth

Flat by default. Inset copper hairline on blotters. No multi-layer shadows.

## Shapes

Pill for seals/CTAs (`999px`). Desk frames `1.25rem`.

## Components

### Buttons
Copper pill primary; secondary as text link on blotter or ghost on ink.

### Mandate Blotter
Parchment panel with top copper hairline; primary conversion copy.

### Ops Plate
Dark panel, mono label, display value, short operational note — not vanity metrics.

## Do's and Don'ts

### Do:
- Keep copper rare and CTA-led
- Lead home with mandate + ops proof
- Localize conversion links

### Don't:
- Dark SaaS hero + three icon cards as the default
- Playfair/Inter pairing
- Invented testimonials, prices, or partner logos
- Nested glass cards in the first viewport
