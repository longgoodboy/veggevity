# Veggevity Website Plan

## Summary
Build a Vietnamese-first Veggevity website as a lightweight MVP that can run locally now and later map into a WordPress + Elementor + WooCommerce production build. The site should combine vegetarian ecommerce, science-led nutrition education, and consultation lead capture in a calm, readable, trust-heavy experience inspired by the Zenhouse structure but with clearer hierarchy.

## Implementation Changes
- Create a multi-page public site with these entry points:
  `Home`, `Shop`, `Nutrition & Health`, `Blog`, `Consultation`, and `About / Contact`.
- Use a consistent brand system built around:
  `#2E7D32`, `#0288D1`, warm neutrals, large readable typography, strong spacing, and mobile-first layouts.
- Make the homepage act as the business hub:
  hero, trust statement, featured products, nutrition teaser, testimonial proof, and article previews.
- Implement a working `Shop` experience with client-side filters for:
  product type, price band, prep time, and elderly-friendly suitability.
- Implement a working `Nutrition & Health` tool with a small local nutrition dataset and meal suggestion sections for:
  elderly users, long-term vegetarians, bone support, and blood sugar support.
- Implement `Consultation` with:
  a lightweight keyword chatbot demo, structured intake form, and local history persistence for the current browser.

## Public Interfaces / Content Model
- Shared navigation labels:
  `Trang chủ`, `Cửa hàng`, `Dinh dưỡng`, `Kiến thức`, `Tư vấn`, `Về Veggevity`.
- Product cards expose:
  product name, prep time, price, short description, and nutrition badges.
- Nutrition lookup entries expose:
  name, protein, B12, calcium, iron, and a short recommendation note.
- Consultation submissions store:
  name, age, eating pattern, goal, and timestamp in local browser storage for demo purposes.

## Test Cases
- Navigation works across all pages on desktop and mobile.
- Homepage presents three clear actions above the fold:
  shop, learn nutrition, request consultation.
- Shop filters correctly narrow products and can be reset.
- Nutrition lookup returns data for known foods and a useful fallback for unknown input.
- Chatbot returns context-aware canned answers for common nutrition questions.
- Consultation form validates required fields and saves a visible history item locally.

## Assumptions
- This repository does not contain a WordPress runtime, so the MVP is implemented as a static frontend prototype that preserves the agreed information architecture and behavior.
- Launch language is Vietnamese-first, with English-ready structure deferred.
- External integrations such as WooCommerce checkout, live admin email, and third-party chatbot services are represented by local MVP behavior only.
