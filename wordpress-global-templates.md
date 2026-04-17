# Veggevity WordPress Global Templates

## Purpose
This document is the implementation spec for `Step 13: Build global templates`.

It defines the shared WordPress/Elementor templates for:
- global header
- global footer

## Current Constraint
- WordPress is still not installed in this repository.
- This spec prepares the build accurately, but Step 13 cannot be marked complete until the templates below are actually created in Elementor Theme Builder or an equivalent templating system.

## Source Of Truth
The template behavior below is derived from:
- [index.html](/D:/code/appDuong/index.html)
- [about.html](/D:/code/appDuong/about.html)
- [wordpress-design-system-setup.md](/D:/code/appDuong/wordpress-design-system-setup.md)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)

## 1. Header Template

### Template scope
- Applies to the full public site
- Excludes checkout or transactional WooCommerce screens only if WooCommerce UX demands a simpler header

### Header structure
Build the header in this order:
1. Utility bar
2. Main navigation row

Do not include the homepage hero inside the global header template.

### 1.1 Utility bar
Purpose:
- quick trust signals
- support contact visibility
- lightweight context, not a marketing carousel

#### Desktop layout
- left side: hotline and Zalo/support chip
- right side: one or two short support or delivery chips

#### Mobile layout
- allow wrap to multiple lines
- do not hide hotline entirely
- keep text short

#### Dynamic content sources
| Slot | Source |
| --- | --- |
| Hotline chip | `hotline` from site settings |
| Zalo chip label | `zalo_label` from site settings |
| Support chip | optional fixed text or site setting later |
| Delivery chip | optional fixed text or site setting later |

#### Display rules
- dark background
- small readable text
- pill chips with subtle borders
- no scrolling ticker
- no more than 4 chips total

### 1.2 Main navigation
Purpose:
- persistent brand anchor
- access to the 6 public destinations
- consultation CTA always visible

#### Layout
- left: brand mark
- center/right: primary nav menu
- far right: consultation CTA button

#### Brand block
Contains:
- circular brand orb graphic
- brand name
- short tagline

Dynamic sources:
| Slot | Source |
| --- | --- |
| Brand name | `brand_name` |
| Tagline | `short_tagline` |
| Brand URL | homepage |

#### Primary nav items
Use the WordPress primary menu with these labels:
- Trang chu
- Cua hang
- Dinh duong
- Kien thuc
- Tu van
- Ve Veggevity

#### CTA button
Dynamic sources:
| Slot | Source |
| --- | --- |
| Label | `consultation_cta_label` |
| Link | `consultation_cta_link` |

#### Behavior rules
- sticky on scroll
- warm translucent background with blur effect
- active item underline uses brand gradient
- do not add dropdown mega-menu behavior in MVP production build
- keep the CTA as a single primary button

### Header responsive behavior
- below tablet widths, allow the nav to collapse into a hamburger or off-canvas panel
- the CTA must remain easy to reach on mobile
- preserve brand name visibility if possible
- utility bar may wrap; it should not disappear without a reason

### Header implementation recommendation
If using Elementor Theme Builder:
- create one Header template
- use site logo substitute via icon/shape or a simple SVG later if brand asset exists
- use dynamic tags for the ACF options fields
- use a WordPress nav menu widget for primary navigation

## 2. Footer Template

### Template scope
- Applies to the full public site
- same footer across all public pages

### Footer structure
Build a wide rounded shell with:
1. main footer grid
2. footer bottom row

### 2.1 Main footer grid
Use four columns on desktop, one column on mobile.

#### Column 1: Brand and support
Contents:
- brand mark or text logo
- footer copy
- hotline
- Zalo label
- support hours

Dynamic sources:
| Slot | Source |
| --- | --- |
| Brand name | `brand_name` |
| Footer copy | `footer_copy` |
| Hotline | `hotline` |
| Zalo label | `zalo_label` |
| Support hours | `support_hours` |

#### Column 2: Navigation
Contents:
- short heading
- links to main pages

Preferred source:
- a dedicated footer menu if available

Fallback:
- reuse primary menu with limited items

#### Column 3: Content shortcuts
Contents:
- links to knowledge-oriented destinations
- at minimum: blog, consultation, nutrition or shop depending on menu structure

Preferred source:
- second footer menu

Fallback:
- manually selected links

#### Column 4: Support or utility copy
Production rule:
- do not keep MVP disclaimer text in production

Use this column for one of:
- support statement
- delivery/service area note
- consultation availability note
- social links

Dynamic options:
| Slot | Source |
| --- | --- |
| Social links | `social_links` repeater |
| Utility copy | fixed copy or future site setting |

### 2.2 Footer bottom row
Contents:
- copyright line
- short secondary note

Recommended structure:
| Slot | Value |
| --- | --- |
| Left | `© [current year] Veggevity` |
| Right | short brand or support line, not MVP/dev note |

Do not keep:
- `Built from PRD + Zenhouse reference adaptation`
- `MVP` wording
- prototype disclaimers

## 3. Shared Template Styling Rules

### Header
- sticky
- backdrop blur
- translucent warm background
- border bottom using the border token
- CTA uses primary button style

### Footer
- deep green gradient shell
- warm light text
- rounded outer shell around `36px`
- generous padding
- links readable with lighter opacity, but not too faint

## 4. Dynamic Data Map

### Header data map
| Element | Dynamic source |
| --- | --- |
| Brand name | site settings |
| Tagline | site settings |
| Hotline chip | site settings |
| Zalo chip | site settings |
| Primary menu | WordPress menu |
| CTA label | site settings |
| CTA link | site settings |

### Footer data map
| Element | Dynamic source |
| --- | --- |
| Brand name | site settings |
| Footer copy | site settings |
| Hotline | site settings |
| Zalo label | site settings |
| Support hours | site settings |
| Footer navigation | WP menu |
| Footer content menu | WP menu or manual links |
| Social links | site settings repeater |

## 5. Build Rules
- keep the header and footer editorially calm
- do not add sliders, counters, newsletter popups, or heavy widgets into global templates
- do not place page-specific copy into the shared templates
- do not expose placeholder MVP-only language in production
- keep the consultation CTA present in the header
- keep contact trust signals present in the footer

## 6. Menu Recommendations
Create these menus in WordPress once available:

### Menu 1: Primary Navigation
- Trang chu
- Cua hang
- Dinh duong
- Kien thuc
- Tu van
- Ve Veggevity

### Menu 2: Footer Navigation
- Trang chu
- Cua hang
- Dinh duong

### Menu 3: Footer Content
- Kien thuc
- Tu van
- Ve Veggevity

## 7. Template QA Checklist
- header appears on all public pages
- footer appears on all public pages
- active nav state works
- consultation CTA points to the correct page
- hotline and support information render from site settings
- footer contains no prototype-only text
- mobile header remains usable
- mobile footer spacing remains readable

## 8. Completion Condition For Step 13
Step 13 should be marked complete only after:
- a working global header template exists
- a working global footer template exists
- both are connected to real WordPress dynamic sources
- both are assigned across the public site
