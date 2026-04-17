# Veggevity WordPress Guide

## What This Guide Is
This guide explains what you need to do next to turn this repo into a real WordPress website.

It is written for a beginner.

You do **not** need to understand all the other project files first.

This guide tells you:
- what is already done
- what is not finished yet
- what tools you need
- what order to do things in
- which repo files to use at each step

## What Is Already Done
These parts are already prepared in this repo:

- The static MVP website is finished:
  [index.html](/D:/code/appDuong/index.html),
  [shop.html](/D:/code/appDuong/shop.html),
  [nutrition.html](/D:/code/appDuong/nutrition.html),
  [blog.html](/D:/code/appDuong/blog.html),
  [consultation.html](/D:/code/appDuong/consultation.html),
  [about.html](/D:/code/appDuong/about.html)

- The WordPress planning and structure documents are prepared.

- A starter WordPress theme exists here:
  [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity)

- A starter WordPress plugin exists here:
  [wp-content/plugins/veggevity-core](/D:/code/appDuong/wp-content/plugins/veggevity-core)

These are **not live yet**. They are only prepared.

## What Is Not Finished Yet
The real WordPress site is **not** running yet.

These things still need to happen:
- install WordPress
- install required plugins
- activate the theme and plugin from this repo
- create menus
- configure Elementor
- build pages inside WordPress
- enter content
- test the site

## Important Reality
This computer/workspace currently does **not** have:
- PHP
- Composer
- WP-CLI
- a database
- a running WordPress site

That means the repo is prepared, but you still need to set up a real WordPress environment later.

## The Main Files You Will Use

### Core guides
- [summary.md](/D:/code/appDuong/summary.md)
- [steps.md](/D:/code/appDuong/steps.md)
- [wordpress-runtime-later-guide.md](/D:/code/appDuong/wordpress-runtime-later-guide.md)

### Content and structure
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)
- [wordpress-design-system-setup.md](/D:/code/appDuong/wordpress-design-system-setup.md)

### Page-by-page build guides
- [wordpress-global-templates.md](/D:/code/appDuong/wordpress-global-templates.md)
- [wordpress-homepage-build.md](/D:/code/appDuong/wordpress-homepage-build.md)
- [wordpress-shop-build.md](/D:/code/appDuong/wordpress-shop-build.md)
- [wordpress-nutrition-build.md](/D:/code/appDuong/wordpress-nutrition-build.md)
- [wordpress-blog-build.md](/D:/code/appDuong/wordpress-blog-build.md)

### WordPress code already prepared
- [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity)
- [wp-content/plugins/veggevity-core](/D:/code/appDuong/wp-content/plugins/veggevity-core)

## Part 1: What You Need Before Anything Else

To run WordPress, you need:
- a local server stack or hosting
- PHP
- MySQL or MariaDB
- WordPress

If you are a beginner, the easiest choices are usually:
- LocalWP
- XAMPP
- Laragon
- a simple shared hosting account with WordPress installer

If you are not sure, use **LocalWP** or **Laragon** for local development.

## Part 2: Create the Real WordPress Site

### Step 1. Install a WordPress environment
Your goal here is simple:
- make WordPress run
- be able to log into `/wp-admin`

After installation, confirm:
- the homepage opens
- `/wp-admin` works
- you can log in as admin

Do **not** start building pages yet.

### Step 2. Copy this repo’s WordPress files into the real install
Inside the real WordPress install, copy:
- [wp-content/themes/veggevity](/D:/code/appDuong/wp-content/themes/veggevity)
- [wp-content/plugins/veggevity-core](/D:/code/appDuong/wp-content/plugins/veggevity-core)

This gives WordPress your custom theme and plugin.

### Step 3. Activate the theme and plugin
In WordPress admin:

1. Go to `Appearance > Themes`
2. Activate `Veggevity`
3. Go to `Plugins`
4. Activate `Veggevity Core`

After this, check that:
- the theme is active
- the plugin is active
- new content types appear in the admin

You should see things like:
- Testimonials
- Nutrition Items

## Part 3: Install the Required Plugins

Install these plugins:
- Elementor Pro
- WooCommerce
- ACF Pro
- Fluent Forms or Gravity Forms
- Rank Math or Yoast SEO
- LiteSpeed Cache or WP Rocket
- Tidio

If you want shop filters:
- Filter Everything
- or FacetWP

### Recommended beginner order
Install in this order:
1. WooCommerce
2. ACF Pro
3. Elementor Pro
4. Forms plugin
5. SEO plugin
6. Cache plugin
7. Tidio
8. Filter plugin

After installing each one:
- activate it
- confirm it shows in the admin menu

## Part 4: Configure Basic WordPress Settings

Go to:
- `Settings > General`
- `Settings > Permalinks`
- `Settings > Reading`
- WooCommerce settings

Use values from:
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

### Basic settings to set
- Site language: Vietnamese
- Permalinks: `Post name`
- Timezone: `Asia/Ho_Chi_Minh`
- Homepage: Trang chu
- Posts page: Kien thuc
- Currency: VND

## Part 5: Check the CMS Structure

The plugin scaffold already tries to register:
- site settings
- custom post types
- taxonomies
- ACF field groups

Use this file as the reference:
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)

### Confirm these exist

#### Global settings
Look for:
- Veggevity Site Settings

#### Custom post types
Look for:
- Testimonials
- Nutrition Items

#### Blog taxonomies
Make sure WordPress posts can use:
- audience
- topic

#### Product fields
Make sure WooCommerce products can hold:
- prep time
- prep band
- elderly-friendly
- short nutrition note
- primary nutrition highlight
- nutrition badges

If these do not appear, stop and debug the plugin/theme activation before building pages.

## Part 6: Enter the Site-Wide Content First

Before building layouts, add the main shared content.

Use:
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

### Add these first
- brand name
- tagline
- hotline
- Zalo label
- support hours
- email
- footer copy
- consultation CTA label and link

This is important because the header and footer will use this data.

## Part 7: Configure the Visual Design in Elementor

Use:
- [wordpress-design-system-setup.md](/D:/code/appDuong/wordpress-design-system-setup.md)

In Elementor, set:
- global colors
- global typography
- button styles
- container widths
- spacing rules

### Focus on these first
- primary green
- secondary blue
- warm background
- serif headings
- readable body text
- rounded cards and buttons

Do **not** start designing randomly.
Follow the design-system file.

## Part 8: Build the Shared Header and Footer

Use:
- [wordpress-global-templates.md](/D:/code/appDuong/wordpress-global-templates.md)

### What to build
- header template
- footer template

### What they should include

#### Header
- utility bar
- brand name and tagline
- main navigation
- consultation CTA button

#### Footer
- brand/support area
- footer navigation
- content links
- support or utility copy

### Also create menus
In WordPress:
- create the main navigation menu
- create footer navigation menu
- create footer content menu

Use the labels in the spec files.

## Part 9: Build the Pages in This Order

This is the best order for the remaining work.

### 1. Homepage
Use:
- [wordpress-homepage-build.md](/D:/code/appDuong/wordpress-homepage-build.md)

Build these sections:
- hero
- why choose
- story block
- featured products
- nutrition teaser
- testimonials
- blog preview
- final CTA

### 2. Shop
Use:
- [wordpress-shop-build.md](/D:/code/appDuong/wordpress-shop-build.md)

Build:
- shop archive
- single product template
- filter panel
- nutrition badges
- consultation CTA

### 3. Nutrition page
Use:
- [wordpress-nutrition-build.md](/D:/code/appDuong/wordpress-nutrition-build.md)

Build:
- intro section
- lookup tool
- suggestion tabs
- CTA band

### 4. Blog
Use:
- [wordpress-blog-build.md](/D:/code/appDuong/wordpress-blog-build.md)

Build:
- blog archive
- single post template
- taxonomy chips
- CTA block

### 5. Consultation page
This step still needs to be built later in WordPress.
Use the prototype and project docs for structure:
- [consultation.html](/D:/code/appDuong/consultation.html)
- [wordpress-implementation-blueprint.md](/D:/code/appDuong/wordpress-implementation-blueprint.md)

Build:
- chatbot area
- consultation form
- trust copy
- response expectation section

### 6. About / Contact page
Use:
- [about.html](/D:/code/appDuong/about.html)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)

Build:
- brand story
- team section
- contact cards
- contact form

## Part 10: Enter the Real Content

After the layouts exist, enter content.

Use:
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

### Add this content in order
1. Site settings
2. Products
3. Testimonials
4. Nutrition items
5. Blog posts
6. Homepage relationships
7. About page content

### Products to add first
- Bun nam thanh dam
- Com gao lut ngu sac
- Set soup mem xuong khop
- Granola hat sen huu co
- Sua hat B12 boost
- Combo thuc don 3 ngay

### Nutrition items to add first
- dau hu
- nam
- rau den
- sua hat
- dau lang
- hat chia

## Part 11: Connect the Important Features

After content is entered, connect the site features.

### WooCommerce
Make sure:
- products show correctly
- price shows correctly
- add to cart works
- checkout works

### Forms
Make sure:
- consultation form stores entries
- admin receives email notifications
- contact form works

### Nutrition lookup
Make sure:
- known ingredients return the correct values
- unknown ingredients return the fallback message

### Chatbot
Make sure:
- Tidio or chosen chatbot is embedded
- widget appears correctly on the consultation page

## Part 12: Test Everything

You should test the site before calling it done.

### Functional tests
- navigation links work
- homepage CTAs work
- shop filters work
- product pages show nutrition fields
- blog posts open correctly
- consultation form works
- nutrition lookup works

### Mobile tests
- text is readable
- buttons are easy to tap
- layouts do not break
- header menu works

### Content tests
- no MVP placeholder copy is left on live pages
- no broken links
- no missing product badges
- no empty sections

## Part 13: What To Ignore For Now

Do **not** try to do everything at once.

You can leave these for later if needed:
- bilingual support
- deeper CRM integration
- advanced nutrition API
- advanced product personalization
- more complex chatbot logic

Finish the core site first.

## Part 14: Easy Beginner Checklist

If you want the simplest version, follow this exact checklist:

1. Install WordPress.
2. Log in to `/wp-admin`.
3. Copy the repo `wp-content/themes/veggevity` and `wp-content/plugins/veggevity-core` into the real site.
4. Activate the theme and plugin.
5. Install WooCommerce, Elementor Pro, ACF Pro, forms, SEO, cache, and chatbot plugins.
6. Set permalinks, homepage, posts page, and currency.
7. Fill in Veggevity Site Settings.
8. Configure Elementor global colors and fonts.
9. Create header and footer templates.
10. Build the homepage.
11. Build the shop archive and single product template.
12. Build the Nutrition page and lookup.
13. Build the blog archive and single post template.
14. Build the consultation page.
15. Build the about/contact page.
16. Enter products, testimonials, nutrition items, and blog posts.
17. Test the whole site on desktop and mobile.

## Part 15: When You Need Help Later

When you come back later, these are good prompts to ask:

- “WordPress is installed. What do I do first now?”
- “Help me activate the Veggevity theme and plugin.”
- “Help me configure Elementor using the Veggevity design system.”
- “Help me build the homepage section by section.”
- “Help me set up the WooCommerce product fields.”
- “Help me make the nutrition lookup work.”
- “Help me QA the site before launch.”

## Final Advice
Do the work in order.

Do not jump between:
- design
- content
- plugins
- templates

Finish one layer at a time:
1. WordPress setup
2. plugin/theme activation
3. settings and structure
4. design system
5. templates
6. pages
7. content
8. testing

That is the safest and easiest path for a beginner.
