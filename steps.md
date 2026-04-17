# Veggevity Execution Steps

## Phase 1. Discovery And Direction

### Step 1
Review the product requirements and reference material.

Output:
- confirm business goals
- confirm target users
- confirm MVP page scope

Status:
- completed

### Step 2
Define the initial website plan and page structure.

Output:
- sitemap
- feature list
- content direction
- implementation assumptions

Status:
- completed

## Phase 2. Prototype

### Step 3
Create the shared visual system.

Output:
- color system
- typography rules
- spacing rules
- reusable UI patterns

Status:
- completed

### Step 4
Build the homepage prototype.

Output:
- hero
- value proposition
- featured products
- nutrition teaser
- testimonials
- blog preview
- final CTA

Status:
- completed

### Step 5
Build the shop prototype.

Output:
- product grid
- filter controls
- nutrition badges

Status:
- completed

### Step 6
Build the nutrition prototype.

Output:
- nutrition lookup
- meal suggestion sections
- CTA to consultation

Status:
- completed

### Step 7
Build the blog, consultation, and about/contact prototypes.

Output:
- article grid
- chatbot demo
- consultation form
- about section
- contact section

Status:
- completed

### Step 8
Verify the prototype locally.

Output:
- pages load
- shared script works
- local preview confirmed

Status:
- completed

## Phase 3. Production Build Preparation

### Step 9
Create the WordPress implementation blueprint.

Output:
- stack choices
- plugin list
- template list
- CMS/data model
- execution order

Status:
- completed

### Step 10
Set up the real WordPress project.

Output:
- WordPress installed
- theme selected
- required plugins installed
- permalinks and base settings configured
- fallback content-entry workbook prepared while WordPress runtime is still unavailable in this repo

Status:
- next

Implementation note:
- A repo-side fallback for this step is now available in [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md), but Step 10 is not complete until WordPress is actually provisioned.
- A WordPress-ready code scaffold now exists under [wp-content](/D:/code/appDuong/wp-content), but this machine still does not have `php`, `composer`, or `wp-cli`, so the real install/runtime portion of Step 10 remains blocked.

### Step 11
Configure the design system in WordPress.

Output:
- global colors
- typography
- buttons
- container widths
- reusable Elementor styles

Status:
- in progress

Implementation note:
- A repo-side setup spec for this step is now available in [wordpress-design-system-setup.md](/D:/code/appDuong/wordpress-design-system-setup.md), but Step 11 is not complete until those values are configured in a real WordPress + Elementor environment.
- The base theme scaffold now exists in [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity), including shared tokens and header/footer styling, but the Elementor global design system is still not applied in a running WordPress site.

### Step 12
Create the CMS structure.

Output:
- site settings
- product extra fields
- testimonial structure
- nutrition data structure
- blog taxonomy
- consultation form fields

Status:
- in progress

Implementation note:
- A repo-side schema spec for this step is now available in [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md), but Step 12 is not complete until those structures are created in WordPress, WooCommerce, ACF, and the selected forms plugin.
- A code scaffold now exists in [wp-content/plugins/veggevity-core/veggevity-core.php](/D:/code/appDuong/wp-content/plugins/veggevity-core/veggevity-core.php), registering the core CPTs, taxonomies, options page, and local ACF field groups.

## Phase 4. WordPress Build

### Step 13
Build global templates.

Output:
- header template
- footer template

Status:
- in progress

Implementation note:
- A repo-side build spec for this step is now available in [wordpress-global-templates.md](/D:/code/appDuong/wordpress-global-templates.md), but Step 13 is not complete until the header and footer are actually built and assigned in WordPress/Elementor.
- A working theme-level scaffold for shared templates now exists in [header.php](/D:/code/appDuong/wp-content/themes/veggevity/header.php) and [footer.php](/D:/code/appDuong/wp-content/themes/veggevity/footer.php), but it has not yet been activated in a running WordPress environment.

### Step 14
Build the homepage in WordPress.

Output:
- production homepage matching the approved prototype structure

Status:
- in progress

Implementation note:
- A repo-side homepage build spec for this step is now available in [wordpress-homepage-build.md](/D:/code/appDuong/wordpress-homepage-build.md), but Step 14 is not complete until the homepage is actually built and assigned in WordPress.

### Step 15
Build the WooCommerce shop templates.

Output:
- shop archive
- single product template
- nutrition labels and supporting fields

Status:
- in progress

Implementation note:
- A repo-side WooCommerce build spec for this step is now available in [wordpress-shop-build.md](/D:/code/appDuong/wordpress-shop-build.md), but Step 15 is not complete until the archive and single product templates are actually built in WordPress/WooCommerce.

### Step 16
Build the nutrition page and lookup tool.

Output:
- page layout
- nutrition lookup logic
- audience-based recommendation sections

Status:
- in progress

Implementation note:
- A repo-side build spec for this step is now available in [wordpress-nutrition-build.md](/D:/code/appDuong/wordpress-nutrition-build.md), but Step 16 is not complete until the Nutrition page and lookup logic are actually built and working in WordPress.

### Step 17
Build the blog templates.

Output:
- blog archive
- single post layout
- CTA blocks

Status:
- in progress

Implementation note:
- A repo-side build spec for this step is now available in [wordpress-blog-build.md](/D:/code/appDuong/wordpress-blog-build.md), but Step 17 is not complete until the archive and single post templates are actually built in WordPress.

### Step 18
Build the consultation workflow.

Output:
- chatbot embed
- working consultation form
- admin notifications

Status:
- pending

### Step 19
Build the about/contact page.

Output:
- story section
- expert/team section
- contact details
- contact form

Status:
- pending

## Phase 5. Content And Integration

### Step 20
Enter real content.

Output:
- real copy
- product data
- testimonials
- expert bios
- blog posts
- contact details

Status:
- pending

Implementation note:
- Use [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md) when the WordPress runtime is available.

### Step 21
Connect production integrations.

Output:
- WooCommerce checkout
- form email delivery
- chatbot service
- analytics
- SEO configuration

Status:
- pending

Implementation note:
- This remains blocked until WordPress, WooCommerce, forms, and chatbot plugins are running. Use [wordpress-runtime-later-guide.md](/D:/code/appDuong/wordpress-runtime-later-guide.md) for the deferred execution sequence.

## Phase 6. QA And Launch

### Step 22
Run functional QA.

Output:
- navigation tested
- forms tested
- filters tested
- lookup tested
- cart flow tested

Status:
- pending

Implementation note:
- This remains blocked until the site is running in WordPress. Use [wordpress-runtime-later-guide.md](/D:/code/appDuong/wordpress-runtime-later-guide.md) as the later execution guide.

### Step 23
Run UX and mobile QA.

Output:
- readability check
- mobile layout check
- older-user readability review
- CTA visibility check

Status:
- pending

Implementation note:
- This remains blocked until the site is running in WordPress. Use [wordpress-runtime-later-guide.md](/D:/code/appDuong/wordpress-runtime-later-guide.md) as the later execution guide.

### Step 24
Run launch preparation.

Output:
- metadata check
- performance cleanup
- final review
- deployment readiness

Status:
- pending

Implementation note:
- This remains blocked until the production build is running and testable. Use [wordpress-runtime-later-guide.md](/D:/code/appDuong/wordpress-runtime-later-guide.md) as the later execution guide.

## Phase 7. Post-Launch

### Step 25
Monitor and improve.

Output:
- analytics review
- SEO content expansion
- UX adjustments
- feature roadmap updates

Status:
- later
