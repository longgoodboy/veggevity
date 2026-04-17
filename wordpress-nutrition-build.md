# Veggevity WordPress Nutrition Build

## Purpose
This document is the implementation spec for `Step 16: Build the nutrition page and lookup tool`.

It maps the approved MVP in [nutrition.html](/D:/code/appDuong/nutrition.html) into a WordPress production build covering:
- Nutrition page layout
- nutrition lookup logic
- audience-based recommendation sections
- CTA flow to consultation and shop

## Current Constraint
- WordPress is still not running in this workspace.
- This spec prepares Step 16 accurately, but the step cannot be marked complete until the Nutrition page and lookup logic are actually built and working in WordPress.

## Source Of Truth
This build spec is based on:
- [nutrition.html](/D:/code/appDuong/nutrition.html)
- [script.js](/D:/code/appDuong/script.js)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)
- [wp-content/plugins/veggevity-core/veggevity-core.php](/D:/code/appDuong/wp-content/plugins/veggevity-core/veggevity-core.php)
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

## Nutrition Page Goals
The Nutrition page must:
- position nutrition as a core differentiator, not side content
- convert scientific guidance into short, usable decisions
- help users move from knowledge to either shop or consultation
- stay readable for older and non-technical users

## Page Structure
Build the page in this order:
1. Page header intro
2. Nutrition lookup block
3. Audience-based meal suggestion section
4. Final CTA band

## 1. Page Header Intro

### Purpose
- establish that nutrition is central to the Veggevity brand
- explain the page value quickly

### Starter structure from MVP
- eyebrow: `Core Feature`
- heading about nutrition being the key differentiator
- supporting text about turning academic knowledge into practical action

### Rules
- keep header concise
- no long textbook-style intro
- one clear paragraph is enough

## 2. Nutrition Lookup Block

### Purpose
- provide a lightweight interactive nutrition tool
- make the nutrition dataset feel useful immediately

### Layout
- desktop: two columns
- left: lookup panel
- right: visual block or calm supporting visual

### Panel contents
Render:
- lookup title
- small helper text with sample ingredients
- input field
- submit button
- results panel

### Starter sample ingredients
- dau hu
- nam
- rau den
- sua hat
- dau lang
- hat chia

## 3. Lookup Data Source

### Content model
The lookup must query the `nutrition_item` post type.

For each item, use:
- title
- `aliases`
- `protein`
- `b12`
- `calcium`
- `iron`
- `recommendation_note`

### Already prepared in repo
The `Veggevity Core` plugin scaffold already:
- registers the `nutrition_item` CPT
- registers the related ACF fields
- exposes a REST field called `nutrition_metrics`

## 4. Lookup Logic

### Required behavior
The lookup should:
- accept one ingredient query
- normalize simple user input
- attempt exact title match
- attempt alias match
- return a structured result
- show a useful fallback if nothing matches

### Match strategy
Minimum matching behavior:
1. trim whitespace
2. lowercase input
3. compare against item title
4. compare against alias repeater values

### Output structure
When a match is found, render:
- item label
- protein
- B12
- calcium
- iron
- recommendation note

### Fallback structure
When no match is found:
- title: “Chua co du lieu khop” or approved Vietnamese equivalent
- show `--` for metrics
- show helper text suggesting sample ingredients

### First implementation recommendation
Acceptable options:
- custom REST fetch from `nutrition_item`
- lightweight AJAX endpoint
- server-rendered page block with client fetch

Preferred first build:
- use the existing REST-ready CPT data from the plugin scaffold
- add a small JS module later in the running site if needed

## 5. Audience-Based Meal Suggestions

### Purpose
- organize advice by user need rather than one long article
- help users self-identify quickly

### Required tabs or category buttons
- Nguoi cao tuoi
- An chay truong
- Loang xuong
- Duong huyet

### Data source
Use page-level repeater fields on the Nutrition page:
- `elderly_suggestions`
- `longterm_suggestions`
- `bone_support_suggestions`
- `blood_sugar_suggestions`

Each repeater row uses:
- `suggestion_text`

### Starter content
Use the workbook data already defined for each audience segment.

### Behavior
- default tab: elderly
- clicking a tab swaps visible suggestion cards
- each card should stay short and practical

### Design rule
- this should feel like structured guidance, not a hidden accordion knowledge base

## 6. CTA Band

### Purpose
- route users whose needs exceed the simple lookup
- keep the page tied back to the conversion flow

### Required CTAs
- consultation CTA
- shop CTA

### Starter structure
- heading: needs more specific advice
- body: move user to consultation when the question is beyond the quick lookup
- primary CTA: consultation
- secondary CTA: shop

## 7. Visual Rules For The Nutrition Page
- keep the layout spacious and calm
- use cards and result boxes with the shared design system
- metric boxes should be easy to scan
- do not overload the page with charts, infographics, or scientific jargon
- preserve the warm background and readable type

## 8. Implementation Options

### Option A. Elementor + custom JS
- build page layout in Elementor
- render Nutrition page fields dynamically
- use a small custom JS script to query `nutrition_item`

### Option B. Theme/plugin block or shortcode
- build the lookup as a shortcode or custom block in the `Veggevity Core` plugin
- place the shortcode inside the Elementor page

### Recommended first approach
- keep page layout in Elementor
- keep lookup logic in plugin/theme-level code
- keep data in the `nutrition_item` CPT

## 9. Content Mapping
| Page area | Data source |
| --- | --- |
| Header intro | page content or ACF page fields |
| Lookup metrics | `nutrition_item` CPT |
| Lookup aliases | `aliases` repeater |
| Lookup note | `recommendation_note` |
| Suggestion tabs | page-level repeaters |
| CTA band | page fields or static page content |

## 10. QA Checklist
- lookup returns a result for known ingredients
- lookup returns a helpful fallback for unknown ingredients
- all four metrics appear correctly
- recommendation note is readable and concise
- suggestion tabs switch correctly
- CTA links to consultation and shop work
- mobile layout remains readable and usable

## 11. Completion Condition For Step 16
Step 16 should be marked complete only after:
- the Nutrition page is built in WordPress
- lookup logic works against real `nutrition_item` data
- meal suggestion sections render correctly
- CTA paths to consultation and shop are visible and functional
