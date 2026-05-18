# Veggevity Master Implementation Plan

## Summary
Veggevity is a Vietnamese-first static website prototype for vegetarian commerce, nutrition communication, and lightweight consultation. The implementation must stay code-only, built with HTML, CSS, and JavaScript, so the product remains easy to explain to a business-oriented audience while still demonstrating a credible digital customer journey.

This project must improve the current prototype in place. It is not a restart, and it is not a migration to WordPress, WooCommerce, a CMS, or a backend application.

## Non-Negotiable Preservation Rules
- Keep the existing multi-page structure:
  `index.html`, `shop.html`, `nutrition.html`, `blog.html`, `consultation.html`, `about.html`
- Keep shared layout elements:
  shared navigation, shared footer, logo-to-home behavior, responsive layout
- Keep current interactive behavior:
  product grid, shop filters, nutrition lookup, alias matching, meal suggestion tabs, blog-card rendering, chatbot demo, consultation form, localStorage history
- Improve and refactor existing work where needed, but do not delete completed features that already support the PRD

## Product Direction
- Position Veggevity as more than a vegetarian shop:
  it should present food commerce, nutrition education, and consultation as one connected experience
- Keep the product understandable for non-technical readers:
  avoid user-facing wording such as `MVP`, `WordPress-ready`, `WooCommerce`, `technical scaffold`, and similar internal framing
- Treat the current version as a persuasive prototype:
  no backend, no real checkout, no real user accounts, no admin system, no real AI, no external nutrition API

## Core Implementation Areas

### 1. Content Integrity And Encoding
- Normalize Vietnamese text rendering across HTML and JavaScript
- Fix any mojibake or broken UTF-8 output in:
  page titles, meta descriptions, headings, labels, buttons, card text, chatbot answers, suggestion content, and localStorage-rendered history
- Keep the site Vietnamese-first, while planning and implementation notes remain in English

### 2. Shared Brand System
- Keep the botanical editorial direction aligned with the provided logo
- Use the defined type system:
  `Playfair Display` for headings, `Lora` for body content, `Inter` for navigation, buttons, forms, and metadata
- Use the PRD color direction:
  warm paper background, olive and deep green, antique gold, bronze, sage, muted ink tones
- Maintain readable spacing, elderly-friendly type sizing, strong contrast, and soft card surfaces

### 3. Homepage
- Keep the homepage as the main business hub
- Preserve and refine:
  hero, starter-guide section, value proposition cards, featured products, nutrition teaser, featured reading, trust notes, and final CTA
- Make the homepage communicate within the first screen:
  what Veggevity is, who it helps, and where users should go next

### 4. Shop Experience
- Keep the current client-side filter flow
- Keep support for:
  product type, price band, preparation time, elderly-friendly suitability, reset behavior, and empty state
- Ensure every product object includes an `image` field
- Keep product cards centered on:
  image, name, price, prep time, short description, nutrition badges, elderly-friendly indicator, and consultation CTA

### 5. Nutrition Experience
- Keep nutrition lookup as a key differentiator
- Preserve the sample dataset and alias support for known ingredients
- Keep the four meal suggestion tabs:
  elderly users, long-term vegetarians, bone support, blood sugar support
- Keep short explanations, softer CTA language, and a clear non-medical disclaimer
- Keep the related nutrition-reading section connected to the same blog data system

### 6. Knowledge / Blog Experience
- Keep the editorial card-based blog surface
- Preserve blog cards with:
  title, audience, topic, reading time, summary, optional image
- Keep category chips and links into shop or consultation flows
- Treat full single-article pages as future expansion, not current scope

### 7. Consultation Experience
- Keep the lighter `Ask Veggevity` positioning
- Preserve keyword-based responses for:
  B12, protein, calcium or bone health, elderly users
- Keep the fallback response that routes users toward the structured form
- Preserve required validation, local submission storage, confirmation state, and visible local history

### 8. About / Contact Experience
- Keep the brand story, philosophy, values, people/team cards, contact placeholders, and contact form placeholder
- Keep the tone warm, calm, and trust-led rather than technical
- Use this page to reinforce the relationship between food, education, and care

### 9. Maintainability
- Keep product, nutrition, and blog data centralized in `script.js`
- Keep shared rendering helpers reusable across pages
- Avoid unnecessary duplication in markup and copy where existing shared patterns already work
- Stay within the static HTML/CSS/JS architecture

## Public Data And Interfaces

### Product Objects
```js
{
  id: Number,
  name: String,
  type: String,
  priceBand: String,
  price: String,
  prep: Number,
  prepBand: String,
  seniorFriendly: Boolean,
  image: String,
  description: String,
  badges: Array
}
```

### Nutrition Entries
```js
{
  label: String,
  protein: String,
  b12: String,
  calcium: String,
  iron: String,
  note: String
}
```

### Blog Entries
```js
{
  id: Number,
  title: String,
  audience: String,
  topic: String,
  time: String,
  image: String,
  summary: String,
  content: String
}
```

### Consultation History Entries
```js
{
  name: String,
  age: String,
  eatingPattern: String,
  goal: String,
  notes: String,
  contact: String,
  time: String
}
```

## Test Scope
- Navigation links, active states, and logo-home behavior work across all pages
- Responsive layout stays stable on desktop and mobile widths
- Vietnamese text renders correctly in browser-visible content and JavaScript-driven content
- Homepage clearly exposes the three main paths:
  shop, nutrition, consultation
- Shop filters, reset behavior, empty state, and image fallback work correctly
- Nutrition lookup works for the preserved sample ingredients and unknown-input fallback
- Meal suggestion tabs switch visible content correctly
- Blog cards render correctly on homepage, nutrition page, and blog page
- Chatbot returns the expected topic responses and safe fallback text
- Consultation form validates required fields, saves to localStorage, and renders local history
- Readability remains appropriate for older users:
  contrast, font size, labels, touch target size, and alt text

## Assumptions And Constraints
- Planning documents are written in English
- Live site content remains Vietnamese-first
- Moderate refactoring is allowed, but no architecture migration is in scope
- WordPress, Elementor, WooCommerce, backend systems, checkout, payments, accounts, real AI, and CRM integration remain out of scope for this version
