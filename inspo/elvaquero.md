---
version: alpha
name: infoeraseelrastro.wixsite.com
description: Minimal Cloudflare error-state presentation for a Wixsite domain, optimized for sparse content, high legibility, and restrained system styling.
colors:
  primary: "#1E7BEF"
  secondary: "#6B7280"
  tertiary: "#9CA3AF"
  neutral:
    0: "#FFFFFF"
    50: "#F9FAFB"
    100: "#F3F4F6"
    200: "#E5E7EB"
    300: "#D1D5DB"
    400: "#9CA3AF"
    500: "#6B7280"
    600: "#4B5563"
    700: "#374151"
    800: "#1F2937"
    900: "#111827"
  surface:
    default: "#FFFFFF"
    subtle: "#F9FAFB"
    elevated: "#FFFFFF"
  on-surface:
    default: "#4B5563"
    strong: "#111827"
    muted: "#9CA3AF"
  error: "#D92D20"
typography:
  fontFamily:
    base: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  headline-display:
    fontSize: 3rem
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontSize: 2rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  headline-md:
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  label-lg:
    fontSize: 0.9375rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  label-md:
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  label-sm:
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
components:
  page:
    background: "{colors.surface.default}"
    maxWidth: 960px
    contentPaddingX: 24px
    contentPaddingY: 32px
  link:
    color: "{colors.primary}"
    textDecoration: underline
  button:
    radius: "{rounded.sm}"
    borderWidth: 1px
    borderColor: "{colors.primary}"
    textColor: "{colors.primary}"
    backgroundColor: "{colors.surface.default}"
    paddingX: 16px
    paddingY: 8px
  divider:
    color: "{colors.neutral.200}"
    thickness: 1px
---

# Overview

This design system describes the Cloudflare-style error page experience for `infoeraseelrastro.wixsite.com`. The UI is intentionally sparse, informational, and non-promotional. It prioritizes a clear error headline, explanatory copy, a support link, and lightweight utility actions.

Visual tone:
- Neutral white background
- Gray-first typography with blue links and controls
- Minimal chrome
- No decorative illustration or heavy branding

Use this system for error states, maintenance states, and DNS-resolution fallback pages with the same restrained tone.

# Colors

The palette is dominated by neutral grays with a single blue interaction color.

## Primary
- `colors.primary`: `#1E7BEF`
- Use for links, outlines, and small interactive controls.

## Secondary and tertiary
- `colors.secondary`: `#6B7280`
- `colors.tertiary`: `#9CA3AF`
- Use for secondary body text, timestamps, and low-emphasis labels.

## Neutrals
- `colors.neutral.0` through `colors.neutral.900` support text, borders, and surfaces.
- The page is mostly white with very light gray separators.
- Use dark neutrals for headings and mid-gray for body text.

## Surface and on-surface
- `colors.surface.default` should remain white.
- `colors.surface.subtle` is for section backgrounds if needed, though the observed page stays flat.
- `colors.on-surface.default` is the standard body text color.
- `colors.on-surface.strong` is for the main headline and section titles.
- `colors.on-surface.muted` is for metadata and de-emphasized labels.

## Error
- `colors.error` is reserved for true error affordances, not the main page chrome.
- The screenshot relies on neutral styling rather than red error banners.

# Typography

The page uses a clean sans-serif system stack with a light display headline and compact body copy.

## Font families
- Base stack: `Helvetica Neue`, Helvetica, Arial, sans-serif
- Monospace stack may be used for IDs, timestamps, or diagnostic strings.

## Type scale
- `headline-display`: large, light-weight title for the error code
- `headline-lg`: section headings like “What happened?”
- `headline-md`: optional subheads or grouped labels
- `body-lg` and `body-md`: explanatory paragraphs
- `body-sm`: metadata, footnotes, and footer text
- `label-*`: small button and utility labels

## Usage notes
- Headline text should be visually light and spacious.
- Body text should be medium gray with comfortable line length.
- Links should inherit body size but use the primary color.
- Avoid heavy weights except for small emphasis inside paragraphs.

# Layout

The composition is centered and narrow, with a large amount of whitespace.

## Page structure
1. Top header block with error code and diagnostic metadata
2. Short subtitle for the error type
3. Explanatory section with heading and paragraph copy
4. Bulleted cause list
5. Support link
6. Feedback prompt and buttons
7. Thin footer divider and diagnostics footer

## Alignment and width
- Content column is centered.
- Max readable width should be around `960px`.
- Text blocks should occupy a narrow column for readability, closer to 480–560px for body content.

## Spacing rhythm
- Large spacing separates the header from the explanation section.
- Paragraphs and bullets use moderate vertical rhythm.
- Footer content is visually detached by a divider and generous whitespace.

## Practical guidance
- Keep the layout single-column.
- Do not introduce sidebars, cards, or multi-panel structures.
- Use ample whitespace instead of borders for hierarchy.

# Elevation & Depth

The page is essentially flat.

- No shadows are visible in the reference.
- Avoid raised cards, overlays, and depth cues.
- Use `divider` lines only when structure is required, such as the footer separator.
- If a component must appear interactive, rely on color and border rather than shadow.

# Shapes

Shapes are simple and nearly square.

- `rounded.none` to `rounded.sm` fits most containers.
- Small buttons use subtle rounded corners.
- The page itself is edge-to-edge with no decorative framing.
- Avoid pill shapes except where explicitly needed for utility badges.

# Components

## Error headline block
- Large error code in light weight.
- Smaller subtitle directly beneath.
- Diagnostic metadata may sit inline with the headline in muted body text.

## Section heading
- Use `headline-lg` with strong on-surface color.
- Keep headings short and informational.

## Body copy
- Use `body-md`.
- Maintain a narrow measure and generous line height.
- Keep paragraphs concise and factual.

## Bullet list
- Use standard bullets with bold lead-ins for key phrases such as “Most likely” and “Less likely”.
- Preserve sentence case and explanatory follow-through.
- Keep list spacing tight enough to read as a single explanation block.

## Link
- Blue, underlined, inline link styling.
- Links should be obvious but not oversized.
- Prefer plain text URLs only when the link needs to be explicit for support.

## Utility buttons
- Small outline buttons with white fill and blue border/text.
- Used for feedback actions such as Yes/No.
- Keep labels short and neutral.
- Do not make buttons visually dominant over the diagnostic content.

## Footer diagnostics
- Small muted text line with Ray ID, IP reveal action, and platform attribution.
- The footer should feel informational, not navigational.

# Do's and Don'ts

## Do
- Do center the content and keep the page narrow and quiet.
- Do use a light-weight headline for the error code.
- Do keep body text gray and readable.
- Do use blue only for links, outlines, and small interactive affordances.
- Do preserve the informational tone and explain the likely cause.
- Do keep hierarchy simple: headline, explanation, bullets, support link, footer.

## Don't
- Don't add marketing language, imagery, or branded illustrations.
- Don't introduce strong color blocks or heavy shadows.
- Don't convert the page into a full application shell.
- Don't use large filled primary buttons unless the state truly requires it.
- Don't overcomplicate the footer; it should stay compact and diagnostic.
- Don't use dense paragraphs or wide line lengths that reduce scannability.