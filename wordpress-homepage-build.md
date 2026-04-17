# Veggevity WordPress Homepage Build

## Purpose
This document is the implementation spec for `Step 14: Build the homepage in WordPress`.

It maps the approved MVP homepage in [index.html](/D:/code/appDuong/index.html) into a production WordPress build using:
- the global templates from [wordpress-global-templates.md](/D:/code/appDuong/wordpress-global-templates.md)
- the CMS structure from [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)
- the content inventory from [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

## Current Constraint
- WordPress is still not running in this workspace.
- This spec prepares the homepage accurately, but Step 14 cannot be marked complete until the page is actually built and assigned as the front page in WordPress.

## Page Goal
The homepage must act as the main business hub and drive three actions clearly:
- shop
- nutrition learning
- consultation

It should feel:
- calm
- readable
- trustworthy
- image-led rather than plugin-led

## Template Dependencies
Before building this page in WordPress, these pieces should already exist or be ready to activate:
- global header template
- global footer template
- homepage ACF field group
- WooCommerce products
- testimonial entries
- blog posts
- nutrition lookup data or a temporary lookup placeholder

## Homepage Section Order
Build the homepage in exactly this order:
1. Hero
2. Why choose Veggevity
3. Homepage structure / story section
4. Featured products
5. Nutrition teaser and quick lookup
6. Testimonials
7. Blog preview
8. Final CTA

Do not add extra sections before the final CTA unless a real business need appears later.

## 1. Hero Section

### Purpose
- establish brand positioning immediately
- surface the 2 main CTAs
- frame the site as commerce + nutrition + consultation

### Content source
Use the homepage fields:
- `hero_eyebrow`
- `hero_heading`
- `hero_copy`
- `hero_primary_cta`
- `hero_secondary_cta`

### Layout
- desktop: two columns
- left: eyebrow, H1, supporting text, CTA row, optional trust metrics
- right: abstract visual composition or approved hero image treatment

### Rules
- keep H1 short and visually dominant
- keep exactly two CTAs
- avoid carousels or sliders
- optional floating-note cards are allowed if they remain restrained

### Data notes
The MVP trust metrics are currently:
- `06`
- `B12`
- `60+`

These can remain as temporary placeholders or be replaced with better proof points during content approval.

## 2. Why Choose Veggevity

### Purpose
- explain the value proposition in plain language
- convert the PRD strategy into user-facing reasons to trust the brand

### Content source
Use:
- `why_badge`
- `why_heading`
- `why_intro`
- `why_cards`

### Layout
- left: section copy
- right: 4 value cards in a clean grid

### Card content
Use the starter rows already defined in the workbook:
- Shop co ngu canh dinh duong
- Noi dung de quet
- Tu van dan dat chuyen doi
- Cau truc WordPress-ready

### Rules
- keep cards short
- one idea per card
- no icon overload

## 3. Homepage Structure / Story Section

### Purpose
- communicate the calm long-form homepage logic
- show that the site is organized around clear user paths

### Content source
Use:
- `story_badge`
- `story_heading`
- `story_copy`
- `story_chips`

### Layout
- one visual block
- one text block
- use chips to reinforce section structure, not as a keyword cloud

### Recommended chips
- Hero + CTA kep
- Featured shop
- Nutrition teaser
- Testimonials
- Blog preview

## 4. Featured Products

### Purpose
- expose commerce without making the homepage feel like a generic store grid
- show how product information carries nutrition context

### Content source
Use:
- `featured_products_badge`
- `featured_products_heading`
- `featured_products_copy`
- `featured_products`

### Query/render rules
- render the manually selected products in the chosen order
- show product image
- show name
- show price
- show prep time
- show short description
- show nutrition badges

### UX rules
- keep this as a curated section, not a full archive
- do not exceed 4 to 6 products on the homepage

## 5. Nutrition Teaser And Quick Lookup

### Purpose
- establish nutrition as a core product differentiator
- provide a light interactive action without overwhelming the homepage

### Content source
Use:
- `nutrition_teaser_badge`
- `nutrition_teaser_heading`
- `nutrition_teaser_copy`
- optional CTA override fields if needed

### Build options
Acceptable first implementation:
- a compact lookup form hitting the future `nutrition_item` data source
- or a temporary CTA panel if lookup code is not ready yet

### If implementing lookup now
The interaction should:
- accept one ingredient query
- match exact title or alias
- return protein, B12, calcium, iron, and note
- show a useful fallback message when no match exists

### Homepage rule
Keep the homepage lookup lighter than the full Nutrition page.

## 6. Testimonials

### Purpose
- shift from claims to reassurance
- support trust for older users and health-aware buyers

### Content source
Use:
- `testimonials_badge`
- `testimonials_heading`
- `homepage_testimonials`

### Render rules
For each testimonial, render:
- quote
- author name
- author descriptor

### Layout rules
- 3 cards is the preferred default
- no slider unless content volume later justifies it

## 7. Blog Preview

### Purpose
- support SEO and education
- make knowledge feel practical instead of detached from conversion

### Content source
Use:
- `blog_preview_badge`
- `blog_preview_heading`
- `featured_posts`

### Render rules
Each card should show:
- audience taxonomy
- topic taxonomy
- title
- read time if available
- short summary or excerpt

### CTA rule
Each card should clearly lead to the full article.

## 8. Final CTA

### Purpose
- collect undecided users at the end of the page
- restate the three-path homepage logic

### Content source
Use:
- `final_cta_heading`
- `final_cta_copy`
- `final_cta_primary`
- `final_cta_secondary`

### Layout rules
- one strong CTA band
- keep it wide, clear, and uncluttered
- no extra forms here

## Dynamic Data Map
| Section | Data source |
| --- | --- |
| Hero | homepage ACF fields |
| Why choose | homepage ACF fields |
| Story section | homepage ACF fields |
| Featured products | relationship field to WooCommerce products |
| Nutrition teaser | homepage ACF fields + future lookup logic |
| Testimonials | relationship field to testimonial CPT |
| Blog preview | relationship field to posts |
| Final CTA | homepage ACF link fields |

## Elementor Build Guidance
- build each homepage section as a reusable container or saved section where practical
- keep one dominant idea per section
- avoid stacking too many nested containers
- preserve strong vertical spacing from the MVP
- keep card styles consistent with the shared design system

## Homepage QA Checklist
- above the fold clearly shows paths to shop, nutrition, and consultation
- hero has exactly 2 visible CTAs
- featured products render real WooCommerce data
- testimonial cards render real testimonial data
- blog preview renders real post data
- homepage does not feel overcrowded on mobile
- CTA path remains visible as the page scrolls
- no prototype-only wording remains on the live homepage

## Completion Condition For Step 14
Step 14 should be marked complete only after:
- the homepage is built in WordPress
- it is assigned as the static front page
- dynamic content sources render correctly
- the page matches the approved MVP structure closely enough for QA
