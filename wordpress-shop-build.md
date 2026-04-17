# Veggevity WordPress Shop Build

## Purpose
This document is the implementation spec for `Step 15: Build the WooCommerce shop templates`.

It maps the approved MVP shop in [shop.html](/D:/code/appDuong/shop.html) into a WooCommerce production build covering:
- shop archive
- single product template
- product nutrition labels
- filter behavior

## Current Constraint
- WordPress is still not running in this workspace.
- This spec prepares Step 15 accurately, but the step cannot be marked complete until the shop archive and single product templates are actually built in WordPress/WooCommerce.

## Source Of Truth
This build spec is based on:
- [shop.html](/D:/code/appDuong/shop.html)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)
- [wp-content/plugins/veggevity-core/veggevity-core.php](/D:/code/appDuong/wp-content/plugins/veggevity-core/veggevity-core.php)

## Shop Goals
The shop must:
- feel like a guided store, not a generic WooCommerce grid
- expose nutrition context clearly
- help users filter by practical decision criteria
- support older-user readability

## Required Templates
Build:
- WooCommerce shop archive template
- WooCommerce single product template

Optional later:
- product category archive styling
- reusable product card partial

## 1. Shop Archive Template

### Layout
Use a two-column layout on desktop:
- left: filter panel
- right: product grid

On mobile:
- stack filters above products
- use collapsible or compact filters if needed, but keep them visible and understandable

### Archive header
At the top of the archive, render:
- eyebrow: `Shop`
- heading
- supporting intro copy

Starter copy from MVP:
- heading: `Cua hang chay co ngu canh dinh duong.`
- body: explain that filters help people choose for older users, lighter meals, or energy-controlled meals

### Filter panel
The MVP filter logic must map into WooCommerce filtering.

#### Required filters
| Filter | Data source |
| --- | --- |
| Product type | taxonomy `product_type_label` |
| Price band | taxonomy `price_band` |
| Prep time band | taxonomy `prep_band` or ACF-derived logic |
| Elderly-friendly | taxonomy `elderly_friendly_term` or ACF flag |

#### Filter labels
| Filter | User-facing label |
| --- | --- |
| Product type | Loai mon |
| Price band | Muc gia |
| Prep time | Thoi gian chuan bi |
| Elderly-friendly | Phu hop nguoi cao tuoi |

#### Expected product type options
- Bua chinh
- Bua phu
- Do uong
- Combo

#### Expected price options
- Duoi 60.000d
- 60.000d - 100.000d
- Tren 100.000d

#### Expected prep options
- Duoi 15 phut
- 15 - 25 phut
- Tren 25 phut

### Filter implementation recommendation
Preferred first implementation:
- use `Filter Everything` or `FacetWP`
- map term labels cleanly in Vietnamese
- avoid custom JS filtering unless the plugin cannot satisfy the UX

If custom logic becomes necessary later:
- build on query vars
- do not hardcode product IDs

### Archive product card
Each product card should render:
- product image
- product title
- product price
- prep time
- short description
- nutrition badges

### Product card behavior
- no dense metadata tables in the archive
- no star ratings unless real review data exists
- keep card copy short and scan-friendly

### Empty state
If filters return no products, show a friendly empty state:
- short message
- suggestion to reset or broaden filters
- optional CTA to consultation

## 2. Single Product Template

### Purpose
The single product page must make the product understandable quickly and reduce uncertainty.

### Required sections
1. product gallery or main image
2. title and price
3. short summary
4. nutrition badge row
5. prep time and suitability signals
6. short nutrition note
7. add-to-cart area
8. consultation CTA if users need help choosing

### Dynamic data sources
Use standard WooCommerce fields for:
- title
- price
- gallery/image
- short description
- cart button

Use ACF/taxonomy fields for:
- `prep_time_minutes`
- `prep_time_band`
- `elderly_friendly`
- `short_nutrition_note`
- `primary_nutrition_highlight`
- `nutrition_badges`

### Product trust signals
Render a compact product facts block with:
- prep time
- elderly-friendly yes/no
- primary nutrition highlight if available

### Nutrition badge rules
- show the selected taxonomy terms as badges
- keep them short
- do not convert them into paragraphs

### Consultation assist
Add a clear secondary CTA such as:
- `Can tu van chon mon?`
- link to the consultation page

This CTA should appear:
- near the summary area
- or below the add-to-cart zone

## 3. Product Data Mapping

### Required product metadata
| Field | Source |
| --- | --- |
| Name | WooCommerce product title |
| Price | WooCommerce price |
| Short description | WooCommerce short description |
| Prep time minutes | ACF `prep_time_minutes` |
| Prep time band | ACF `prep_time_band` |
| Elderly-friendly | ACF `elderly_friendly` |
| Short nutrition note | ACF `short_nutrition_note` |
| Primary nutrition highlight | ACF `primary_nutrition_highlight` |
| Nutrition badges | taxonomy `nutrition_label` |

### Starter product dataset
Use the workbook entries already defined for:
- Bun nam thanh dam
- Com gao lut ngu sac
- Set soup mem xuong khop
- Granola hat sen huu co
- Sua hat B12 boost
- Combo thuc don 3 ngay

## 4. Visual Rules For The Shop
- keep archive cards warm and spacious
- do not revert to WooCommerce default grey card styling
- badges should use the existing soft blue treatment
- preserve the calm, readable tone from the homepage
- filters should feel editorial and helpful, not technical

## 5. Archive CTA Logic
The shop archive should include a consultation pathway for users who are unsure.

Recommended placements:
- header CTA in the page intro
- empty state CTA
- optional band below the product loop if needed later

## 6. Later Enhancement Paths
These are optional and should not block Step 15:
- dynamic sorting controls
- stock/status messaging
- meal-plan bundles
- richer nutrition accordion
- image galleries with lifestyle shots

## 7. WooCommerce Build Notes
- use WooCommerce product archive hooks only if they help maintainability
- if Elementor Pro is used for archive and single product templates, keep the custom fields integrated via dynamic tags
- prefer taxonomy-backed filters over ad hoc custom conditionals

## 8. Shop QA Checklist
- shop archive loads correctly
- filters narrow products correctly
- reset behavior restores the full catalog
- each product card shows prep time and nutrition badges
- single product page shows the extra nutrition fields
- consultation CTA is visible on archive and single product pages
- mobile filter experience remains readable

## 9. Completion Condition For Step 15
Step 15 should be marked complete only after:
- the shop archive is built in WooCommerce/Elementor
- the single product template is built
- filters work against real product data
- nutrition labels and supporting product fields render correctly
