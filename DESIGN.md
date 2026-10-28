---
name: Iyad Mahdy Portfolio (Line Map)
description: A transit-signage portfolio where each AI system is a coloured route line and each pipeline stage a station.
colors:
  ink: "#111418"
  paper: "#ffffff"
  mist: "#f1f2f4"
  muted: "#4a5058"
  line-1-blue: "#0b4fd6"
  line-2-magenta: "#c4176f"
  line-3-amber: "#f2b200"
  line-4-green: "#007a4d"
typography:
  billboard:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)"
    fontWeight: 900
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  badge: "4px"
  button: "6px"
  panel: "8px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  section: "clamp(2.5rem, 6vw, 5rem)"
  wrap: "1140px"
components:
  sign-button-blue:
    backgroundColor: "{colors.line-1-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1.4rem"
  sign-button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1.4rem"
  sign-button-amber:
    backgroundColor: "{colors.line-3-amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1.4rem"
  skill-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.95rem"
  skill-chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  line-numeral:
    backgroundColor: "{colors.line-1-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.round}"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  top-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  next-stop-bar:
    backgroundColor: "{colors.line-3-amber}"
    textColor: "{colors.ink}"
---

# Design System: Iyad Mahdy Portfolio (Line Map)

## Overview

**Creative North Star: "The Line Map"**

Each AI system is a coloured route line and each pipeline stage is a station, read at a glance like station signage. The ground is a white sign panel, the bars are ink black, and every line owns one saturated colour: blue for SmartCA, magenta for Kidic, amber for Nexora, green for analysis work. The system stays recognisable with all copy removed, because the route strokes and station dots carry it.

The tone is functional and confident. It is dense with information but never decorative: a recruiter skimming on a phone should see which system used which skill, then take the next stop (resume or contact). The system is built over Bootstrap 5.2 and overrides its template look (gradient hero, icon cards, glowing accents) rather than extending it.

**Key Characteristics:**
- White panels, ink bars, four line colours used as identity, not decoration.
- 2px ink borders with small radii (4 to 8px); no shadows, no gradients.
- Archivo variable font: wide and heavy for signs, normal width for text.
- Line numerals as large filled circles; stations as ringed dots on a thick stroke.
- One signature interaction: choosing a skill lights the lines that use it and dims the rest.

## Colors

A signage palette: two neutrals plus ink, and four fully saturated line colours that each mean one system.

### Primary
- **Line 1 Blue** (#0b4fd6): SmartCA line; also the default link, primary button, caret and form focus colour.

### Secondary
- **Line 2 Magenta** (#c4176f): Kidic line.
- **Line 3 Amber** (#f2b200): Nexora line, the next-stop bar, skip link and text selection. Always paired with ink text, never used as text on white.
- **Line 4 Green** (#007a4d): analysis line, success alert border.

### Neutral
- **Signal Ink** (#111418): text, top bar, footer, all borders, station strokes on the terminus.
- **Sign Paper** (#ffffff): page ground and panel fill.
- **Mist** (#f1f2f4): hairline dividers between lines, hover fill on chips, scrollbar track.
- **Muted Slate** (#4a5058): secondary copy, ledes and status text.

### Named Rules
**The One Line, One Colour Rule.** A line colour identifies its system everywhere: numeral, stations, tags, inner-page heading badge. It is never reused as a generic accent for another system.
**The Ink Text on Amber Rule.** Amber fills carry ink text and ink numerals; amber never sets text on white.

## Typography

**Display Font:** Archivo variable (with Helvetica Neue, Arial, sans-serif), loaded from Google Fonts with the `wdth` 62..125 and `wght` 100..900 axes.
**Body Font:** Archivo at normal width (`font-stretch: 100%`).

**Character:** One grotesque used two ways: wide (110 to 115%) and black weight for signs, normal width for reading. The width axis is what separates a sign from a paragraph.

### Hierarchy
- **Billboard** (900, clamp 2.5rem to 5rem, 1.02, wdth 112, -0.03em): the hero name only.
- **Headline** (900, clamp 1.75rem to 2.75rem, wdth 112): section titles (route, terminus, next-stop name).
- **Title** (900, clamp 1.25rem to 1.75rem): line names.
- **Body** (400, 1rem, 1.6): copy, capped near 62ch; ledes 52ch, hero tag 44ch.
- **Label** (700, 0.9 to 0.95rem): nav tabs, chips, station names (600), kind lines.

### Named Rules
**The Wide Sign, Normal Text Rule.** Widened `font-stretch` is reserved for sign-level text (names, titles, numerals, 404 code); running text stays at 100%.

## Layout

A single 1140px centred wrapper with 1.5rem side padding. The hero is a two-column grid (1.5fr text, 1fr portrait) with a fluid gap (2rem to 4rem). Each line row is a grid: a big numeral column then content, separated by 2px mist rules; sections are separated by 2px ink rules. Vertical rhythm uses roughly 0.5, 0.75, 1.25, 1.75rem steps and a fluid section pad (2.5rem to 5rem).

Below 768px, hero and terminus collapse to one column, the numeral shrinks to 3.25rem above its content, and horizontal stations turn into a vertical list on a vertical stroke. Section titles use `text-wrap: balance`.

## Elevation & Depth

Flat. There are no drop shadows (Bootstrap shadow utilities are zeroed) and no gradients. Depth is conveyed by 2px ink borders and flat colour blocks. The one ring effect is a hard 3px white plus 4px line-colour spread ring around a lit numeral when a skill is selected; it is a state signal with no blur.

### Named Rules
**The Flat Sign Rule.** Surfaces are flat panels with ink outlines. State is shown by fill inversion, a ring, opacity (dim to 0.3) or a 2px lift on sign buttons, never by shadow.

## Shapes

Small, sign-like corners: 4px badges and nav tabs, 6px buttons, fields and feature blocks, 8px panels, cards and the portrait. Full circles (50%) are reserved for line numerals and station dots; pills (999px) for skill chips only. Every container edge is a 2px ink border. Stations are a 1.1rem white dot with a 4px line-colour ring on a 0.3rem stroke; the terminal station is larger (1.4rem), ink-ringed and filled with the line colour. A four-segment stripe bar (blue, magenta, amber, green) closes the portrait panel.

## Components

### Sign Buttons
- **Shape:** 6px radius, 2px ink border, weight 800, padding 0.8rem 1.4rem.
- **Variants:** blue (primary), ink, amber (ink text). Bootstrap `.btn` variants are re-skinned to match; outline variants are white with ink border that invert to ink on hover.
- **Hover / Focus:** lifts 2px over 0.15s (removed under reduced motion); focus is a 3px ink outline with 3px offset (amber on dark bars).

### Skill Chips
- **Style:** pill, white fill, 2px ink border, weight 700. Pressed state (`aria-pressed`) inverts to ink fill with white text; hover fills mist. A live status line beneath describes the selection.

### Line Row, Numeral and Stations
- **Numeral:** filled circle in the line colour, white numeral (ink on amber), 3.25 to 5.5rem.
- **Stations:** horizontal row of ringed dots joined by a thick stroke that draws in on scroll (0.5s, staggered 0.12s); vertical on mobile and in the detailed variant. A hit station scales 1.35, fills with the line colour and is underlined 3px in that colour; unmatched lines dim to 0.3 opacity.
- **Go link:** weight 800 with a 3px line-colour underline that fills on hover.

### Cards and Panels
- 2px ink border, 8px radius, white fill, no shadow. The portrait panel has a blue ground and the stripe bar.

### Navigation and Chrome
- **Top bar:** ink bar, white wide-black brand, 700 tabs with 4px radius; hover is a 16% white wash, active is white fill with ink text.
- **Next-stop bar:** full-width amber strip with a 2px ink top rule, small label and a large wide-black destination; underlines on hover.
- **Footer:** ink bar with white text and links.

### Inputs
- 2px ink border, 6px radius; focus switches to blue border plus a 3px blue outline.

### Inner-page Line Tag
- Inner pages set a line colour on the body; the page heading gets a numeral circle in that colour, and a small line tag shows a ringed dot in it.

## Do's and Don'ts

### Do:
- **Do** use the four line colours as system identity and keep one colour per system.
- **Do** use 2px ink borders with 4, 6 or 8px radii on every panel, button and field.
- **Do** pair amber fills with ink text and keep focus outlines at 3px with offset.
- **Do** keep line colour as a CSS variable (`--line`) so numerals, stations and links inherit it.
- **Do** respect reduced motion by disabling the station draw and the button lift.

### Don't:
- **Don't** add shadows, gradients or glow; the template's gradient and shadow utilities are deliberately neutralised.
- **Don't** set body text in widened or black Archivo, or use the wide cut outside sign-level text.
- **Don't** use amber as text on white or any line colour for decoration unrelated to its system.
- **Don't** use icon-card grids; the stage list, not icon tiles, is how process is shown.
