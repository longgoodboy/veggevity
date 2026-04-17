# Veggevity WordPress Design System Setup

## Purpose
This document is the implementation spec for `Step 11: Configure the design system in WordPress`.

It translates the static MVP styles in [styles.css](/D:/code/appDuong/styles.css) into:
- Elementor global colors
- Elementor typography presets
- button styles
- container widths
- reusable section and card rules

## Current Constraint
- WordPress is still not installed in this repository.
- This step can be prepared accurately, but it cannot be marked complete until the values below are entered into a real WordPress + Elementor environment.

## Source Of Truth
The values below are extracted from [styles.css](/D:/code/appDuong/styles.css).

## Global Color Tokens

### Brand palette
| Token | Value | Usage |
| --- | --- | --- |
| Primary brand | `#43A047` | main CTA gradient start, active accents |
| Primary deep | `#2C7A31` | headings, section badge text, stronger brand emphasis |
| Secondary brand | `#19A2DF` | CTA gradient end, badge color, trust accents |
| Secondary soft | `rgba(2, 136, 209, 0.12)` | soft badge backgrounds |

### Neutrals
| Token | Value | Usage |
| --- | --- | --- |
| Page background | `#EEF7E8` | base page canvas |
| Surface | `#FFFDF8` | cards, panels, light sections |
| Surface strong | `#E4F1DA` | stronger soft panel backgrounds if needed |
| Ink | `#1F2B1F` | primary body text |
| Muted | `#5E6A60` | supporting text |
| Line | `rgba(31, 43, 31, 0.12)` | borders and dividers |

### Background direction
Use a warm green-first background instead of flat white:
- top-left radial tint in green
- top-right radial tint in blue
- vertical blend from `#F7FFF2` to `#EEF7E8` to `#E5F4DB`

In Elementor, apply this to the site background or main page wrapper rather than individual cards.

## Typography System

### Font pairing
| Role | Font stack from MVP | WordPress recommendation |
| --- | --- | --- |
| Body | `"Trebuchet MS", "Segoe UI", sans-serif` | use `Segoe UI` or a close readable sans-serif already available on the target stack |
| Display and headings | `"Palatino Linotype", "Book Antiqua", Palatino, serif` | keep `Palatino Linotype` or choose a close serif with strong Vietnamese support |

### Typography presets
| Style | Size | Line height | Weight | Notes |
| --- | --- | --- | --- | --- |
| Body | `16px` to `18px` | `1.55` | 400 | prioritize readability for older users |
| Muted body | `15px` to `16px` | `1.55` | 400 | use for meta copy only |
| Eyebrow | `12px` to `13px` | `1.2` | 600 | uppercase, letter spacing `0.12em` |
| H1 | `clamp(3rem, 7vw, 6rem)` | `0.95` | 700-ish display weight | hero only |
| H2 | `clamp(2.2rem, 4vw, 4rem)` | `1.02` | display serif | major sections |
| H3 / card title | about `1.25rem` | `1.2` to `1.3` | display serif | cards and subsections |
| Metric / display number | `2rem` | `1.0` | display serif | stats and floating notes |

### Typography behavior
- Keep headings serif-based for brand calm and authority.
- Keep body copy sans-serif for legibility.
- Avoid dense paragraph blocks wider than about `36rem`.
- Keep section headings short and visually dominant.

## Layout System

### Widths
| Element | Value |
| --- | --- |
| Standard content container | `min(1180px, calc(100vw - 2rem))` |
| Hero/footer wide shell | `min(1320px, calc(100vw - 1.25rem))` |
| Default section gap | `1.25rem` |

### Spacing
| Element | Value |
| --- | --- |
| Standard section vertical padding | `5rem` top and bottom |
| Page header top padding | `3rem` |
| Card internal padding | `1.25rem` |
| CTA band internal padding | `clamp(1.5rem, 4vw, 3rem)` |
| Nav vertical padding | `1rem` |

### Grid patterns
Use these as the default Elementor container patterns:

| Pattern | Columns | Usage |
| --- | --- | --- |
| Section grid | 12-column concept | copy + feature/group layouts |
| Two-panel split | `1.1fr 0.9fr` | nutrition, consultation, about, contact |
| Shop layout | `320px 1fr` | filters + product grid |
| Three-card grid | `repeat(3, minmax(0, 1fr))` | products, blog cards, quotes, team, contacts |
| Mobile collapse | single column under `960px` | all main layouts |

## Shape And Surface Tokens

### Radius
| Token | Value | Usage |
| --- | --- | --- |
| Large radius | `28px` | cards, panels |
| Medium radius | `18px` | smaller panels and floating notes |
| Large shell radius | `32px` to `36px` | hero, page header, footer, CTA band |
| Pill radius | `999px` | buttons, chips, tabs, badges |

### Shadow
| Token | Value |
| --- | --- |
| Standard shadow | `0 24px 60px rgba(49, 58, 42, 0.12)` |

### Surface style
Default card and panel look:
- background: near-white warm surface with slight transparency
- border: `1px solid rgba(31, 43, 31, 0.12)`
- radius: `28px`
- shadow: standard shadow

## Buttons

### Primary button
| Property | Value |
| --- | --- |
| Min height | `3rem` |
| Padding | `0 1.2rem` |
| Radius | `999px` |
| Background | `linear-gradient(135deg, #43A047, #19A2DF)` |
| Text color | `#FFFFFF` |
| Shadow | standard shadow |
| Hover | translate Y `-1px` |

### Secondary button
| Property | Value |
| --- | --- |
| Background | `rgba(255,253,248,0.72)` |
| Border | `1px solid rgba(31, 43, 31, 0.12)` |
| Text | use ink color |
| Radius | `999px` |

### Ghost button
| Property | Value |
| --- | --- |
| Background | transparent |
| Border | `1px solid rgba(31, 43, 31, 0.12)` |
| Radius | `999px` |

## Header Setup

### Utility bar
- dark background: `rgba(31, 43, 31, 0.92)`
- light text: near `#F6F0E4`
- small text around `0.92rem`
- pill chips with subtle light border

### Main navigation
- sticky header
- blurred translucent warm surface background
- bottom border using the line token
- active nav underline uses a left-to-right gradient from primary to secondary

### Brand mark
- circular orb with green-to-blue gradient
- subtle internal radial highlights
- strong shadow

## Reusable Components

### Section badge
| Property | Value |
| --- | --- |
| Background | `rgba(46,125,50,0.1)` |
| Text color | `#2C7A31` |
| Padding | `0.35rem 0.75rem` |
| Radius | `999px` |

### Badge
| Property | Value |
| --- | --- |
| Background | `rgba(2, 136, 209, 0.12)` |
| Text | secondary brand |
| Font size | `0.84rem` |
| Radius | `999px` |

### Tabs
- inactive: warm translucent white with line border
- active: same green-to-blue gradient as primary buttons
- fully pill-shaped

### Card families
Apply one shared card class approach for:
- feature cards
- quote cards
- article cards
- product cards
- suggestion cards
- contact cards
- consultation panels
- nutrition panels

Use the same surface, border, shadow, and radius tokens to keep the site coherent.

## Hero Rules
- Hero must stay visually strongest on the site.
- Use a darkened green gradient overlay, not a flat photo banner.
- Keep two-column structure on desktop and collapse to one column on mobile.
- H1 should remain large and short, with max width around `8ch`.
- Keep exactly two hero CTAs.
- Retain floating note cards as optional decorative trust signals.

## Footer Rules
- Wide shell, not full-width flat strip
- Deep green background gradient
- Warm off-white text
- Four-column layout on desktop, one column on mobile
- Rounded outer shell around `36px`

## Elementor Global Setup Checklist

### Global Colors
- set `Primary` to `#43A047`
- set `Primary Deep` custom token to `#2C7A31`
- set `Secondary` to `#19A2DF`
- set `Surface` to `#FFFDF8`
- set `Background` to `#EEF7E8`
- set `Text` to `#1F2B1F`
- set `Muted Text` custom token to `#5E6A60`
- set `Border` custom token to `rgba(31, 43, 31, 0.12)`

### Global Fonts
- body preset uses the sans stack
- heading presets use the serif stack
- create a small uppercase preset for eyebrow labels
- create a meta preset for muted supporting text

### Theme Style
- buttons: configure primary and secondary variants
- form fields: `14px` radius minimum, soft borders, white fill
- links: no default underlines except intentional nav active state
- sections: preserve strong vertical spacing

### Container Defaults
- max width `1180px`
- wide template width `1320px`
- default content gap `1.25rem`
- mobile collapse under `960px`

## Responsive Rules
- below `960px`: all major multi-column sections collapse to one column
- below `720px`: product, article, quote, team, contact, and suggestion grids collapse to one column
- on small screens: buttons can expand to full width
- preserve generous spacing even when stacked

## Design Risks To Avoid
- do not replace the warm background with flat white
- do not swap the serif heading system for generic all-sans typography
- do not overuse WooCommerce default card styling
- do not add sliders, counters, or dense plugin-heavy homepage sections
- do not compress spacing to fit more content above the fold

## Completion Condition For Step 11
Step 11 should be marked complete only after:
- the global colors exist in Elementor
- typography presets are configured
- button styles are configured
- container widths and section spacing are set
- at least one reusable section/card style approach is established in WordPress
