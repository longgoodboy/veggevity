# Zenhouse Vietnam Frontend Reference

Analyzed from the public homepage: <https://zenhousevietnam.com/>

Analysis date: 2026-04-14

## Purpose

This document captures how Zenhouse Vietnam structures its frontend so we can reuse the useful patterns later in our own project without copying the site blindly.

## High-Level Frontend Impression

Zenhouse uses a content-heavy restaurant/service landing page approach rather than a minimal brand site. The homepage is long, section-based, and built to do several jobs at once:

- introduce the brand and atmosphere
- showcase menu categories
- promote event/catering services
- promote cooking classes
- sell products
- build trust with testimonials and imagery
- convert visitors into table bookings or direct contact

The frontend is designed more for breadth and discoverability than for a single focused conversion funnel.

## Core Frontend Characteristics

### 1. Long-scroll homepage

The site is built as a stacked landing page with many sections in sequence. Instead of sending users immediately into separate deeper pages, the homepage previews almost every major business line.

This gives the homepage strong SEO and content reach, but it also makes the page dense.

### 2. Content-first structure

The layout is driven by content blocks:

- hero/introduction
- category previews
- service cards
- class cards
- product blocks
- testimonials
- gallery/media
- booking/contact footer

This is less of a "design system showcase" and more of a CMS-driven marketing page.

### 3. Photo-led trust building

The site leans heavily on images to sell atmosphere:

- restaurant ambience
- food photos
- gallery thumbnails
- branded identity images

This is important to copy at the strategy level: the visuals do a large share of the persuasion.

### 4. Multi-offer navigation

The header exposes many business categories at once:

- vegetarian party services
- ceremonial food offerings
- cooking courses
- menu
- events/content
- contact/booking

The frontend is therefore closer to a hybrid of restaurant site + service catalog + blog + ecommerce.

## Homepage Information Architecture

Based on the homepage content, the frontend flow is roughly:

1. Top utility/header area
2. Main navigation with many dropdown categories
3. Intro/hero block with brand statement
4. Menu category showcase
5. Vegetarian event/catering services
6. Cooking course highlights
7. Product sales blocks
8. Convenience/takeaway food section
9. Supporting info and gallery links
10. Customer testimonials
11. Video/media section
12. Booking/contact section
13. Footer repeating important navigation

This is a useful pattern if we want one homepage to support multiple user intents.

## Reusable UI Patterns

### Header pattern

The header combines:

- social/follow area
- hotline/contact emphasis
- logo/brand area
- large primary nav
- language switcher
- cart link

Why it works:

- contact is always visible
- users can jump directly into sub-services
- multilingual support is surfaced early
- ecommerce is integrated into the main experience

What to reuse:

- a slim utility bar above the main nav
- persistent phone/WhatsApp/reservation CTA
- language toggle if our project needs bilingual support

### Hero pattern

The hero is not an oversized cinematic splash. It works more like a branded intro section:

- brand name
- short emotional/value-based message
- supporting text
- CTA to brand story or more detail

Why it works:

- fast explanation of the brand
- calm, welcoming tone
- enough copy to support SEO and emotional positioning

What to reuse:

- concise value proposition
- atmosphere-first copy
- one primary CTA and one secondary CTA

### Category preview blocks

The site uses repeated category previews for menu and services:

- image
- category title
- short teaser or repeated CTA
- click-through to deeper pages

Why it works:

- gives users quick orientation
- breaks a large business offering into digestible chunks
- supports mobile scrolling well

What to reuse:

- consistent section cards
- image + title + action pattern
- no overlong descriptions in the overview layer

### Testimonial section

The testimonial area is straightforward and trust-focused:

- quote text
- customer name
- identity label

Why it works:

- the copy is detailed enough to feel real
- reinforces atmosphere, food quality, and service

What to reuse:

- 3 to 5 detailed testimonials
- emphasis on sensory experience and hospitality

### Gallery/media section

There appears to be a gallery/slider treatment with thumbnails and navigation arrows.

Why it works:

- shows space and food variety
- keeps the page visually alive late in the scroll
- supports credibility without forcing long reading

What to reuse:

- image carousel or masonry gallery
- mix of ambience, food, and event photos

### Footer booking block

The page ends with a strong booking/contact area containing:

- restaurant identity
- address
- hotline
- fanpage link
- hours

Why it works:

- the final section is conversion-oriented
- practical information is easy to find
- contact details are repeated where users naturally stop scrolling

What to reuse:

- booking CTA near the footer
- location, hours, and contact grouped together
- map or messaging shortcut if relevant

## Visual Direction

From the public rendering and content framing, the site communicates:

- calm
- spiritual/wellness-adjacent atmosphere
- hospitality
- abundance of offerings
- family/event service trust

The likely visual strategy is:

- warm natural tones
- food and garden imagery
- soft, non-aggressive contrast
- traditional brand presentation rather than edgy modern minimalism

For our project, the lesson is not "copy the exact style." The useful principle is:

Use a peaceful, trust-building visual language where photography and spacing do most of the emotional work.

## Content Strategy Observations

Zenhouse does not rely on one narrow product narrative. The frontend supports many entry points:

- customers looking for dine-in meals
- users searching for vegetarian event services
- people looking for ceremonial offerings
- students interested in cooking courses
- buyers of books or packaged products

This is why the homepage is broad and modular.

If our project also has multiple business lines, this is a good reference. If our project has only one main goal, we should simplify this structure.

## Technical/Platform Inference

These are inferences from the public site structure, not a full source-code audit:

- likely CMS-driven
- very likely WordPress-based
- likely includes ecommerce behavior because cart UI is visible
- likely uses posts/custom post types for services, classes, and articles
- the homepage appears assembled from reusable content sections rather than hand-coded one-off blocks

Why that matters for us:

- if we want similar maintainability, we should model the page as reusable sections and structured content
- do not hardcode every homepage card directly into one file unless the site is intentionally static

## What Is Strong About This Frontend

- clear business breadth
- strong trust signals
- many conversion paths
- good use of real content
- good fit for SEO-oriented discovery
- practical information is always nearby

## What Is Weak or Risky About This Frontend

- homepage can feel crowded because many offers compete for attention
- repeated sections can dilute hierarchy
- navigation breadth may overwhelm first-time users
- content density can reduce the premium feel if not carefully spaced

If we borrow this model, we should keep the strengths but tighten the hierarchy.

## Recommendations For Our Project

If we want to take inspiration from Zenhouse, we should adapt these elements:

### Keep

- long-form homepage built from clear sections
- trust-heavy photography
- service/category previews
- testimonial block
- strong footer contact section
- bilingual or locale-aware UX if needed

### Improve

- reduce the number of equally prominent sections
- create a clearer primary CTA
- avoid duplicated content blocks
- use stronger spacing and typography hierarchy
- make the first screen more visually decisive

### Suggested section order for a cleaner remake

1. Utility bar with reservation/contact
2. Main nav
3. Hero with one strong visual and two CTAs
4. Signature offerings or menu categories
5. Service highlights
6. Atmosphere/gallery strip
7. Testimonials
8. Booking/contact section

## Component List We Can Rebuild Later

- utility header
- multi-level navigation
- hero intro section
- category card grid
- service article cards
- course highlight cards
- product cards
- testimonial carousel or quote grid
- gallery slider
- booking/contact footer

## Implementation Notes For Our Future Build

If we build a similar frontend in a modern stack, use section-based components such as:

- `Header`
- `UtilityBar`
- `HeroIntro`
- `CategoryGrid`
- `ServiceHighlights`
- `CourseHighlights`
- `ProductShowcase`
- `Testimonials`
- `Gallery`
- `BookingCTA`
- `Footer`

Recommended data model:

- `siteSettings`
- `navigation`
- `hero`
- `menuCategories`
- `services`
- `courses`
- `products`
- `testimonials`
- `galleryImages`
- `contactInfo`

## Short Takeaway

Zenhouse's frontend is effective because it feels like a rich, trustworthy, real business presence. Its strength is not cutting-edge UI technique. Its strength is structured content, strong hospitality cues, and a homepage that acts as a full business hub.

For our project, the best lesson is:

Build a calm, image-led, section-based frontend with clear trust signals and strong service discoverability, but tighten the hierarchy so the experience feels more intentional and less crowded.
