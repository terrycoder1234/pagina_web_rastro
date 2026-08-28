---
version: alpha
name: moooi.com
description: Premium editorial commerce system for Moooi, balancing art-direction-led imagery with restrained typography, light neutral surfaces, and rounded pill actions.
colors:
  primary: "#1f1f1f"
  secondary: "#f7b500"
  tertiary: "#929292"
  neutral: "#f3f3f3"
  surface: "#ffffff"
  on-surface: "#1f1f1f"
  error: "#d92d20"
typography:
  headline-display:
    fontFamily: "__TYPE_SANGBLEU_SANS_069a48, __TYPE_SANGBLEU_SANS_Fallback_069a48"
    fontSize: 38px
    fontWeight: 400
    lineHeight: 46px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "__TYPE_SANGBLEU_SANS_069a48, __TYPE_SANGBLEU_SANS_Fallback_069a48"
    fontSize: 31px
    fontWeight: 400
    lineHeight: 45.6px
    letterSpacing: -0.76px
  headline-md:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 25px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0.84px
  body-lg:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
  body-md:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
  body-sm:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
  label-lg:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
  label-md:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
  label-sm:
    fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
    fontSize: 16px
    fontWeight: 400
    lineHeight: normal
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 26px
  lg: 52px
  xl: 106px
components:
  button:
    primary:
      backgroundColor: "#1f1f1f"
      color: "#f3f3f3"
      borderColor: "transparent"
      borderRadius: 40px
      borderWidth: 1px
      borderStyle: solid
      padding: "8px 16px"
      fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
      fontSize: 16px
      fontWeight: 400
      minWidth: 120px
      minHeight: 40px
      boxShadow: none
    secondary:
      backgroundColor: transparent
      color: "#ffffff"
      borderColor: "#929292"
      borderRadius: 40px
      borderWidth: 1px
      borderStyle: solid
      padding: "8px 16px"
      fontFamily: "__TYPE_SANGBLEU_SANS_069a48, __TYPE_SANGBLEU_SANS_Fallback_069a48"
      fontSize: 16px
      fontWeight: 400
      minWidth: 120px
      minHeight: 40px
      boxShadow: "rgb(146, 146, 146) 0px 0px 0px 0px inset"
    link:
      backgroundColor: transparent
      color: "#1f1f1f"
      textDecoration: underline
      borderRadius: 0px
      borderWidth: 0px
      borderStyle: none
      padding: 0px
      fontFamily: "__TYPE_GILL_SANS_0505e8, __TYPE_GILL_SANS_Fallback_0505e8"
      fontSize: 16px
      fontWeight: 400
      minWidth: 0px
      minHeight: 0px
      boxShadow: none
  card:
    backgroundColor: "#f3f3f3"
    borderColor: "#e5e7eb"
    borderRadius: 8px
    borderWidth: 1px
    borderStyle: solid
    padding: 16px
    boxShadow: none
    textColor: "#1f1f1f"
---

# Overview

Moooi.com is an editorial-first luxury commerce experience. The visual language is quiet, spacious, and image-led, with a strong preference for restrained UI chrome so product photography and campaign storytelling remain dominant.

The screenshot shows a full-screen hero with a dark photographic overlay, centered serif headline, small uppercase kicker, and a rounded CTA pill. Navigation is minimal and thin, with lightweight iconography and limited color usage. Use this system to preserve that gallery-like, high-end tone.

# Colors

Use a mostly neutral palette with one warm accent.

- **Primary / on-surface:** `#1f1f1f` for text, icons, and dark UI.
- **Secondary accent:** `#f7b500` for emphasis only. Use sparingly; the screenshot does not show it prominently in core navigation.
- **Tertiary neutral:** `#929292` for borders, muted labels, and secondary affordances.
- **Neutral surface:** `#f3f3f3` for panels and cards.
- **Surface:** `#ffffff` for overlays and light content areas.
- **Error:** `#d92d20` for destructive or invalid states.

Guidance:
- Prefer low-contrast UI over saturated brand color blocks.
- Use dark text on light surfaces; on imagery, use a dim overlay and light text.
- Avoid using the accent as a large background fill unless the campaign specifically calls for it.

# Typography

Typography is the strongest brand signal. The system combines a refined serif for hero moments with a clean sans-serif for navigation and body copy.

## Type tokens

- **headline-display** — Sangbleu Sans, 38px/46px, regular. Best for hero headlines and story titles.
- **headline-lg** — Sangbleu Sans, 31px/45.6px, regular, slightly tightened tracking.
- **headline-md** — Gill Sans, 25px/30px, regular, wide tracking for editorial labels.
- **body-lg / body-md / body-sm** — Gill Sans, 16px, regular.
- **label-lg / label-md / label-sm** — Gill Sans, 16px, regular.

## Usage notes

- Use the serif style for large editorial headlines, especially on campaign or product-story heroes.
- Use Gill Sans for navigation, support copy, category labels, and CTAs.
- Keep weights light to regular; do not introduce bold display treatment unless necessary for accessibility.
- Maintain generous line height and restrained letter spacing, especially in uppercase or label contexts.

# Layout

The page structure favors a centered content column over a photographic background.

- Use full-bleed imagery with a dark overlay when text is placed on top.
- Center the primary headline and supporting copy vertically in the hero region.
- Keep navigation elements pinned near the top edge with wide horizontal spacing.
- Preserve large vertical breathing room between kicker, headline, subcopy, and CTA.
- Use the spacing scale consistently:
  - `xs: 6px`
  - `sm: 14px`
  - `md: 26px`
  - `lg: 52px`
  - `xl: 106px`

Practical pattern:
- Hero stack: kicker → headline → subcopy → CTA
- Secondary content blocks should separate from the hero with at least `lg` spacing.
- Avoid dense grids or card rows in the hero area.

# Elevation & Depth

Depth is subtle and usually comes from photography, overlays, and a small amount of shadow.

- Use `sm` shadow for floating pills or lightweight controls when needed.
- Use `md` shadow only for pronounced floating elements.
- Cards are mostly flat; avoid heavy elevation.
- The screenshot suggests overlay darkness and transparency are more important than shadow complexity.

Recommended depth behavior:
- Dark hero overlays should reduce image contrast without fully obscuring the background.
- CTA pills can appear lightly lifted, but should never feel material-heavy.
- Do not stack multiple shadows on the same element.

# Shapes

Rounded geometry is a core cue in interactive elements.

- **none:** `0px`
- **sm:** `8px`
- **md:** `16px`
- **lg:** `24px`
- **xl:** `40px`
- **full:** `9999px`

Usage:
- Primary and secondary buttons should use the full pill radius (`40px` / full visual shape).
- Cards use soft corners (`8px`) to stay understated.
- Icons and navigation remain unboxed; do not wrap them in heavy containers.
- Reserve sharp corners for structural layout only.

# Components

## Buttons

### Primary button
- Dark filled pill with light text.
- Minimum target size: `120px` by `40px`.
- Use for key actions such as “Available Now” or “Shop now.”
- Keep label length short.

### Secondary button
- Transparent background, light border, light text.
- Use on dark imagery or overlays.
- Use when an action is important but not dominant.

### Link button
- Plain text link with underline.
- Use in body copy, collection lists, and utility actions.
- Avoid converting primary CTAs into links.

## Card

- Light neutral surface with a subtle border.
- Flat appearance, minimal padding, and dark text.
- Use for product previews or informational modules, not for hero treatment.

## Navigation

- Treat top navigation as minimal utility chrome.
- Keep icons thin, low-noise, and evenly spaced.
- Use muted text for language selectors and support actions.
- Avoid large background containers or dropdown-heavy styling in the header.

## Hero story block

Expected hero pattern:
- Small kicker in uppercase or all-caps style.
- Large centered serif headline.
- One concise subhead.
- Single pill CTA.
- Dark image overlay behind the text.

# Do's and Don'ts

## Do
- Do keep the UI quiet so imagery leads.
- Do use Sangbleu Sans for the primary story headline.
- Do use Gill Sans for navigation, body copy, and CTAs.
- Do preserve generous spacing between hero elements.
- Do use rounded pill CTAs with simple borders or fills.
- Do keep overlays dark enough for readable text on photography.
- Do keep component borders thin and neutral.

## Don't
- Don't introduce bright multi-color UI treatments.
- Don't overuse the yellow accent in core navigation or large surfaces.
- Don't use heavy shadows, glossy effects, or glassmorphism.
- Don't crowd the hero with multiple CTAs or dense metadata.
- Don't mix bold sans headings into the editorial hero.
- Don't make cards feel elevated or app-like.
- Don't surround icons and labels with boxed controls unless functionally necessary.