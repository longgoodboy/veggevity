# Veggevity WordPress Implementation Blueprint

## Goal
Turn the current static MVP into a production-ready `WordPress + Elementor + WooCommerce` build without changing the agreed information architecture, visual hierarchy, or primary conversion flow.

## Delivery Stack
- CMS: `WordPress`
- Page builder: `Elementor Pro`
- Ecommerce: `WooCommerce`
- Forms: `Fluent Forms` or `Gravity Forms`
- SEO: `Rank Math` or `Yoast SEO`
- Performance/cache: `LiteSpeed Cache` if server supports it, otherwise `WP Rocket`
- Chat widget: `Tidio`
- Custom fields / structured content: `ACF Pro`
- Optional filtering for shop: `Filter Everything` or `FacetWP`

## Theme Strategy
- Use a lightweight base theme:
  `Hello Elementor` is the safest default.
- Put all brand tokens in one place:
  colors, spacing scale, button styles, border radius, heading styles, container widths.
- Recreate the current prototype as reusable Elementor sections/templates, not page-specific one-offs.

## Required Templates
- `Header`
  utility bar, brand mark, primary nav, consultation CTA
- `Footer`
  contact details, repeated nav, support info, MVP note removed for production
- `Home page`
  hero, why Veggevity, homepage structure/story block, featured products, nutrition teaser, testimonials, blog preview, final CTA
- `Shop archive`
  intro header, product filter area, product loop, nutrition labels
- `Single product`
  gallery/image, short summary, nutrition badges, age suitability, prep time, CTA to consult if needed
- `Nutrition & Health page`
  hero intro, quick nutrition tool, meal recommendation sections by audience/use case, CTA to consultation
- `Blog archive`
  featured categories, article grid, CTA to shop or consultation
- `Single post`
  article body, related posts, CTA band
- `Consultation page`
  chatbot embed, consultation form, trust copy, response expectations
- `About / Contact page`
  brand story, experts/advisors, hotline/Zalo/email, contact form, map placeholder

## CMS / Content Model

### 1. Site Settings
Create one global settings group with:
- brand name
- short tagline
- hotline
- Zalo label/link
- support hours
- contact email
- footer copy
- social links
- consultation CTA label/link

### 2. Homepage Fields
Create an ACF field group for homepage sections:
- hero eyebrow
- hero heading
- hero supporting copy
- hero primary CTA
- hero secondary CTA
- why-choose heading and intro
- featured products selection
- nutrition teaser heading/copy
- testimonial selection
- featured posts selection
- final CTA heading/copy/buttons

### 3. Products
Use WooCommerce products with extra ACF fields:
- prep time
- suitability for elderly users
- nutrition badges
- short nutrition note
- primary nutrition highlight

Create product taxonomies or attributes for:
- product type
- price range if needed for filtering UX
- prep time band
- elderly-friendly
- nutrition labels

### 4. Testimonials
Create a `testimonial` custom post type or use a repeater in site settings.
Fields:
- quote
- author name
- author descriptor
- optional ordering

### 5. Nutrition Data
For MVP-to-production transition, use one of two models:
- Recommended first build:
  create a `nutrition_item` custom post type with fields for name, aliases, protein, B12, calcium, iron, note.
- Later upgrade:
  move to a normalized dataset/API-backed model once data quality and scale require it.

### 6. Blog
Use default WordPress posts with categories/tags.
Minimum taxonomy structure:
- audience:
  `Người cao tuổi`, `Ăn chay trường`, `Cơ bản`
- topic:
  `Dinh dưỡng khoa học`, `Thực đơn`, `Lợi ích sức khỏe`, `Công thức`

### 7. Consultation Leads
Store form submissions in the chosen forms plugin and notify admin by email.
Required fields:
- full name
- age
- current eating habits
- main goal
- optional notes
- phone or email

## Page-by-Page Build Mapping

### Home
Map current sections from [index.html](/D:/code/appDuong/index.html) into Elementor in this order:
1. Utility/contact bar
2. Header
3. Hero with 2 CTAs
4. Why choose Veggevity
5. Brand/story structure section
6. Featured products
7. Nutrition teaser with lookup CTA
8. Testimonials
9. Blog preview
10. Final CTA

Rules:
- Keep exactly one dominant visual idea per section.
- Do not add extra sliders, counters, or logo walls.
- Keep the first screen focused on:
  `Shop`, `Nutrition`, `Consultation`.

### Shop
Map current behavior from [shop.html](/D:/code/appDuong/shop.html):
- archive page intro
- visible filter controls above or beside product loop
- product cards with nutrition badges and prep time
- consultation CTA for users unsure what to buy

### Nutrition
Map [nutrition.html](/D:/code/appDuong/nutrition.html):
- educational intro
- lookup tool block
- audience-based meal recommendation sections
- CTA to consultation

The lookup tool should initially be implemented with:
- AJAX endpoint or lightweight custom plugin querying `nutrition_item`
- exact match + alias match
- clear fallback message for unknown items

### Blog
Map [blog.html](/D:/code/appDuong/blog.html):
- taxonomy chips or category nav
- article card grid
- persistent CTA to either shop or consultation

### Consultation
Map [consultation.html](/D:/code/appDuong/consultation.html):
- chatbot widget embed near top
- structured form below or beside it
- clear statement of response expectations

Do not implement browser-local history in production.
Replace it with:
- form entry storage
- admin email notification
- optional CRM sync later

### About / Contact
Map [about.html](/D:/code/appDuong/about.html):
- brand story
- expert/advisor block
- contact cards
- contact form
- future map placeholder

## Custom Build Work Needed
- Custom nutrition lookup block:
  likely a small plugin or theme-level PHP + JS module
- Shop label rendering:
  badges for B12 / canxi / elderly-friendly / low calorie
- Filter logic:
  use plugin-based filtering first, avoid custom code unless filters become too specific
- Consultation workflow:
  form notification and thank-you handling

## Visual Rules To Preserve
- Primary color: `#2E7D32`
- Secondary color: `#0288D1`
- Background should stay warm/off-white rather than flat white
- Typography must remain highly readable for older users
- Keep strong vertical spacing between sections
- Avoid dense card grids as the main brand impression
- Keep the homepage calm and image-led, not plugin-led

## Production Content Checklist
- Final Vietnamese hero copy
- Real hotline / Zalo / email / support hours
- Real product list and pricing
- Final nutrition badges and their definitions
- Approved nutrition claims
- Final testimonials
- Expert names and bios
- First 6-10 blog posts or at least placeholders with real taxonomy

## QA Checklist Before Launch
- Header and footer work across all templates
- Mobile readability is acceptable for users `60+`
- WooCommerce product pages show all extra nutrition fields
- Filters return expected products
- Consultation form submits and emails admin
- Nutrition lookup returns correct structured output
- CTA paths are visible from every major page
- SEO title/meta configured for all core pages
- Performance and image sizes are acceptable on mobile

## Order Of Execution
1. Set up WordPress, theme, plugins, and permalink structure
2. Create global design tokens in Elementor theme settings
3. Create content model in ACF / taxonomies / WooCommerce attributes
4. Build reusable header and footer templates
5. Build Home page
6. Build Shop archive and single product
7. Build Nutrition page and lookup tool
8. Build Blog archive and post template
9. Build Consultation page and form workflow
10. Build About / Contact page
11. Enter real content
12. QA, performance cleanup, SEO pass, launch prep

## Immediate Next Build Task
The next concrete step after this blueprint should be:
- provision the WordPress project and install the required plugins

If WordPress setup is not available yet, the fallback next step is:
- create a `content-entry workbook` listing every field/value needed to populate the production site.
