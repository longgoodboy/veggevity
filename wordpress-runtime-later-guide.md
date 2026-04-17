# Veggevity WordPress Runtime Guide

## Purpose
This document is the “do later” guide for the work that cannot be fully completed in the current workspace because there is no running WordPress toolchain here.

Use it when you are ready to execute the real environment setup and activation work.

## Current Local Limitation
This workspace currently does not have:
- `php`
- `composer`
- `wp-cli`
- a running database
- a running WordPress site

Because of that, repo assets can be prepared now, but runtime execution still needs to happen later.

## What Is Already Prepared In The Repo
- planning and scope docs
- content entry workbook
- design system setup spec
- CMS structure spec
- global templates spec
- homepage build spec
- WordPress theme scaffold in [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity)
- WordPress plugin scaffold in [wp-content/plugins/veggevity-core](/D:/code/appDuong/wp-content/plugins/veggevity-core)

## Later Execution Sequence

### Step 1. Provision the WordPress environment
You will need:
- PHP
- MySQL or MariaDB
- WordPress
- a local web server stack

Once that environment exists:
- create a fresh WordPress install
- point it at the database
- confirm the admin panel loads

### Step 2. Copy or mount the repo `wp-content`
Move or sync these repo folders into the real WordPress install:
- [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity)
- [wp-content/plugins/veggevity-core](/D:/code/appDuong/wp-content/plugins/veggevity-core)

### Step 3. Install the required plugins
Install and activate:
- Elementor Pro
- WooCommerce
- ACF Pro
- Fluent Forms or Gravity Forms
- Rank Math or Yoast SEO
- LiteSpeed Cache or WP Rocket
- Tidio

### Step 4. Activate the theme and plugin
Inside WordPress:
- activate `Veggevity` theme
- activate `Veggevity Core` plugin
- verify that custom post types and taxonomies appear

### Step 5. Configure base settings
Use [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md) for values.

Configure:
- site language
- permalink structure
- timezone
- homepage assignment
- posts page assignment
- WooCommerce currency

### Step 6. Verify ACF and CMS structure
Confirm the following exist:
- Veggevity Site Settings options page
- homepage field group
- product field group
- testimonial CPT and fields
- nutrition item CPT and fields
- about page fields

Use [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md) as the reference.

### Step 7. Configure the design system
In Elementor:
- set global colors
- set global typography
- set button styles
- confirm container widths and spacing

Use [wordpress-design-system-setup.md](/D:/code/appDuong/wordpress-design-system-setup.md).

### Step 8. Build the global templates
Create:
- header template
- footer template

Use:
- [wordpress-global-templates.md](/D:/code/appDuong/wordpress-global-templates.md)

### Step 9. Build the homepage
Use:
- [wordpress-homepage-build.md](/D:/code/appDuong/wordpress-homepage-build.md)

### Step 10. Enter seed content
Use:
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

Start with:
- site settings
- homepage copy
- products
- testimonials
- nutrition items
- blog seed posts

### Step 11. Build the remaining production pages
Continue in this order:
- shop templates
- nutrition page
- blog templates
- consultation page
- about/contact page

### Step 12. Run QA
Check:
- navigation
- mobile readability
- WooCommerce fields
- filters
- nutrition lookup
- consultation form notifications
- CTA visibility

## What To Ask Me Later
When the runtime exists, the most useful prompts will be:
- “WordPress is installed, help me activate and verify the Veggevity theme and plugin.”
- “Walk me through configuring Elementor globals from the Veggevity design spec.”
- “Help me build the homepage section by section in Elementor.”
- “Help me test the custom post types, taxonomies, and ACF fields.”
- “Help me finish the Nutrition page lookup logic.”

## Completion Definition
The project becomes truly build-complete only when:
- WordPress is running
- the theme and plugin are active
- dynamic data renders correctly
- core pages are built
- forms and WooCommerce behavior are tested
