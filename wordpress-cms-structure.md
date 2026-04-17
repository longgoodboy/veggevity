# Veggevity WordPress CMS Structure

## Purpose
This document is the implementation spec for `Step 12: Create the CMS structure`.

It defines the exact WordPress content model needed for:
- site settings
- homepage-managed fields
- WooCommerce product metadata
- testimonials
- nutrition lookup data
- blog taxonomy
- consultation lead capture

## Current Constraint
- There is still no real WordPress runtime in this repository.
- This document prepares the CMS model accurately, but Step 12 cannot be marked complete until the structure below is created inside WordPress, WooCommerce, ACF, and the chosen forms plugin.

## Recommended Architecture

### Use these systems
- Global settings: `ACF Options Page`
- Homepage fields: `ACF field group assigned to the Home page`
- Products: `WooCommerce products + ACF fields + product taxonomies/attributes`
- Testimonials: `testimonial` custom post type
- Nutrition data: `nutrition_item` custom post type
- Blog: `default WordPress posts + custom taxonomies`
- Consultation leads: `Fluent Forms` or `Gravity Forms` entries, plus admin email notifications

## 1. Global Site Settings
Create an ACF Options Page called `Veggevity Site Settings`.

### Field group: Site Settings
| Field label | Field name | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| Brand name | `brand_name` | Text | yes | Default: Veggevity |
| Short tagline | `short_tagline` | Text | yes | Header brand line |
| Hotline | `hotline` | Text | yes | Used in header/footer/contact |
| Zalo label | `zalo_label` | Text | yes | Example: Veggevity Care |
| Zalo link | `zalo_link` | URL | no | Missing in MVP |
| Support hours | `support_hours` | Text | yes | Example: 08:00 - 20:00 moi ngay |
| Contact email | `contact_email` | Email | yes | Used site-wide |
| Footer copy | `footer_copy` | Textarea | yes | Production footer text |
| Consultation CTA label | `consultation_cta_label` | Text | yes | Header and reusable CTA |
| Consultation CTA link | `consultation_cta_link` | Link | yes | Usually consultation page |
| Social links | `social_links` | Repeater | no | Platform label + URL |

### Repeater: Social links
| Field label | Field name | Type |
| --- | --- | --- |
| Platform | `platform` | Text |
| URL | `url` | URL |

## 2. Homepage Field Group
Assign this field group only to the page used as the static homepage.

### Group: Hero
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Hero eyebrow | `hero_eyebrow` | Text | yes |
| Hero heading | `hero_heading` | Text | yes |
| Hero supporting copy | `hero_copy` | Textarea | yes |
| Hero primary CTA | `hero_primary_cta` | Link | yes |
| Hero secondary CTA | `hero_secondary_cta` | Link | yes |

### Group: Why Choose
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `why_badge` | Text | yes |
| Heading | `why_heading` | Text | yes |
| Intro copy | `why_intro` | Textarea | yes |
| Value cards | `why_cards` | Repeater | yes |

### Repeater: Why cards
| Field label | Field name | Type |
| --- | --- | --- |
| Card title | `title` | Text |
| Card body | `body` | Textarea |

### Group: Story Structure Section
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `story_badge` | Text | yes |
| Heading | `story_heading` | Text | yes |
| Supporting copy | `story_copy` | Textarea | yes |
| Story chips | `story_chips` | Repeater | no |

### Repeater: Story chips
| Field label | Field name | Type |
| --- | --- | --- |
| Chip label | `label` | Text |

### Group: Featured Products
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `featured_products_badge` | Text | yes |
| Heading | `featured_products_heading` | Text | yes |
| Intro copy | `featured_products_copy` | Textarea | yes |
| Featured products | `featured_products` | Relationship | yes |

Notes:
- Relationship targets `product`
- Allow manual ordering

### Group: Nutrition Teaser
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `nutrition_teaser_badge` | Text | yes |
| Heading | `nutrition_teaser_heading` | Text | yes |
| Intro copy | `nutrition_teaser_copy` | Textarea | yes |
| CTA label override | `nutrition_teaser_cta_label` | Text | no |
| CTA link override | `nutrition_teaser_cta_link` | Link | no |

### Group: Testimonials
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `testimonials_badge` | Text | yes |
| Heading | `testimonials_heading` | Text | yes |
| Testimonials | `homepage_testimonials` | Relationship | yes |

Notes:
- Relationship targets `testimonial`
- Manual ordering enabled

### Group: Featured Blog Posts
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Section badge | `blog_preview_badge` | Text | yes |
| Heading | `blog_preview_heading` | Text | yes |
| Featured posts | `featured_posts` | Relationship | yes |

Notes:
- Relationship targets standard `post`

### Group: Final CTA
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Heading | `final_cta_heading` | Text | yes |
| Supporting copy | `final_cta_copy` | Textarea | yes |
| Primary CTA | `final_cta_primary` | Link | yes |
| Secondary CTA | `final_cta_secondary` | Link | yes |

## 3. WooCommerce Product Model
Use standard WooCommerce products with extra metadata.

### ACF field group: Product Nutrition And Suitability
Assign to post type `product`.

| Field label | Field name | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| Prep time (minutes) | `prep_time_minutes` | Number | yes | Example: 15 |
| Prep time band | `prep_time_band` | Select | yes | `fast`, `medium`, `slow` |
| Elderly-friendly | `elderly_friendly` | True/False | yes | Used in filtering and badges |
| Short nutrition note | `short_nutrition_note` | Textarea | no | One concise explanation |
| Primary nutrition highlight | `primary_nutrition_highlight` | Text | no | Example: B12, Canxi |
| Nutrition badges | `nutrition_badges` | Taxonomy or Checkbox | yes | Prefer taxonomy-backed terms |

### Recommended product taxonomies
Use global attributes if you want WooCommerce-native filtering, or custom product taxonomies if you want cleaner editorial labels.

| Taxonomy / attribute | Slug | Terms |
| --- | --- | --- |
| Product type | `product_type_label` | `meal`, `snack`, `drink`, `combo` |
| Price band | `price_band` | `low`, `mid`, `high` |
| Prep band | `prep_band` | `fast`, `medium`, `slow` |
| Elderly-friendly | `elderly_friendly_term` | `yes`, `no` |
| Nutrition label | `nutrition_label` | see list below |

### Nutrition label terms
- `B12`
- `Canxi`
- `Bo sung sat`
- `Protein tot`
- `It dau`
- `It muoi`
- `No lau`
- `Meal plan`
- `Kiem soat nang luong`
- `Snack lanh manh`
- `Chat xo`
- `Mang di`
- `Uong lien`
- `Khong duong tinh luyen`
- `Nguoi lon tuoi`

### Product query requirements
The product schema must support filtering by:
- product type
- price band
- prep band
- elderly-friendly suitability

## 4. Testimonial Content Type
Create a custom post type called `testimonial`.

### CPT settings
| Setting | Value |
| --- | --- |
| Post type key | `testimonial` |
| Singular label | Testimonial |
| Public | yes |
| Has archive | no |
| Show in REST | yes |
| Supports | title, thumbnail |

### ACF field group: Testimonial Details
| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Quote | `quote` | Textarea | yes |
| Author name | `author_name` | Text | yes |
| Author descriptor | `author_descriptor` | Text | yes |
| Sort order | `sort_order` | Number | no |

Notes:
- The title can be internal only, for admin clarity.
- Frontend should render quote, author name, and author descriptor, not necessarily the WP title.

## 5. Nutrition Item Content Type
Create a custom post type called `nutrition_item`.

### CPT settings
| Setting | Value |
| --- | --- |
| Post type key | `nutrition_item` |
| Singular label | Nutrition Item |
| Public | yes |
| Has archive | no |
| Show in REST | yes |
| Supports | title |

### ACF field group: Nutrition Metrics
| Field label | Field name | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| Aliases | `aliases` | Repeater | yes | Used for lookup matching |
| Protein | `protein` | Text | yes | Store display value like `8g` |
| B12 | `b12` | Text | yes | Store display value like `1.2mcg` |
| Calcium | `calcium` | Text | yes | Store display value like `250mg` |
| Iron | `iron` | Text | yes | Store display value like `2.3mg` |
| Recommendation note | `recommendation_note` | Textarea | yes | Main output note |

### Repeater: Aliases
| Field label | Field name | Type |
| --- | --- | --- |
| Alias | `alias` | Text |

### Query requirements
The lookup logic should support:
- exact title match
- alias match from repeater data
- fallback message when no item matches

## 6. Meal Recommendation Structure
The audience-specific recommendation blocks can be implemented in either of two acceptable ways.

### Preferred short-term approach
Add these as fields on the Nutrition page:
- elderly suggestions repeater
- long-term vegetarian suggestions repeater
- bone support suggestions repeater
- blood sugar support suggestions repeater

### Alternative approach
Create a small CPT for recommendation sets if editorial volume grows.

### Recommended page-level field names
| Field label | Field name | Type |
| --- | --- | --- |
| Elderly suggestions | `elderly_suggestions` | Repeater |
| Long-term vegetarian suggestions | `longterm_suggestions` | Repeater |
| Bone support suggestions | `bone_support_suggestions` | Repeater |
| Blood sugar support suggestions | `blood_sugar_suggestions` | Repeater |

Repeater rows:
- `suggestion_text` as Textarea

## 7. Blog Content Model
Use standard WordPress `post`.

### Recommended custom taxonomies
| Taxonomy | Slug | Terms |
| --- | --- | --- |
| Audience | `audience` | `Nguoi cao tuoi`, `An chay truong`, `Co ban` |
| Topic | `topic` | `Dinh duong khoa hoc`, `Thuc don`, `Loi ich suc khoe`, `Cong thuc` |

### Optional post-level metadata
If the design needs read time displayed consistently, add one small ACF group for posts.

| Field label | Field name | Type | Required |
| --- | --- | --- | --- |
| Read time label | `read_time_label` | Text | no |
| CTA mode | `cta_mode` | Select | no |

Possible CTA mode values:
- `shop`
- `consultation`
- `both`

## 8. Consultation Lead Structure
Do not create a custom post type for leads unless the forms plugin proves insufficient.

### Required form fields
| Field label | Machine name | Type | Required |
| --- | --- | --- | --- |
| Full name | `full_name` | Text | yes |
| Age | `age` | Number | yes |
| Current eating habits | `current_eating_habits` | Textarea | yes |
| Main goal | `main_goal` | Text | yes |
| Optional notes | `optional_notes` | Textarea | no |
| Phone or email | `contact_method` | Text | yes |

### Form behavior requirements
- store entries in the forms plugin
- send admin notification email
- show confirmation message
- support future CRM sync without changing field names

## 9. About / Contact Managed Fields
Most of this page can use page content plus repeaters rather than another CPT.

### Suggested page-level ACF fields
Assign to the About / Contact page only.

| Field label | Field name | Type |
| --- | --- | --- |
| Brand story badge | `brand_story_badge` | Text |
| Brand story heading | `brand_story_heading` | Text |
| Brand story copy | `brand_story_copy` | Textarea |
| Team cards | `team_cards` | Repeater |
| Contact cards | `contact_cards` | Repeater |

### Repeater: Team cards
| Field label | Field name | Type |
| --- | --- | --- |
| Role | `role` | Text |
| Description | `description` | Textarea |

### Repeater: Contact cards
| Field label | Field name | Type |
| --- | --- | --- |
| Label | `label` | Text |
| Value | `value` | Text |

## 10. Naming And Governance Rules
- Keep field names in English snake_case for maintainability.
- Keep visible labels in Vietnamese or bilingual admin wording as needed.
- Prefer repeaters and relationships over hardcoded page-builder-only content.
- Use taxonomy terms where filtering or grouping matters.
- Use ACF text fields for short display values exactly as they will appear on the frontend.

## 11. Data Entry Sequence
Once WordPress exists, create the CMS structure in this order:
1. ACF Options Page for global settings
2. Product attributes/taxonomies
3. Product ACF field group
4. `testimonial` CPT and fields
5. `nutrition_item` CPT and fields
6. Blog taxonomies
7. Homepage field group
8. About page field group
9. Nutrition page repeaters
10. Consultation form

## 12. Completion Condition For Step 12
Step 12 should be marked complete only after:
- all field groups exist in ACF
- required taxonomies or attributes exist
- `testimonial` and `nutrition_item` post types exist
- the consultation form schema exists in the chosen forms plugin
- the field names are stable enough for template implementation
