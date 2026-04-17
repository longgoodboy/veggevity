# Veggevity WordPress Blog Build

## Purpose
This document is the implementation spec for `Step 17: Build the blog templates`.

It maps the approved MVP blog in [blog.html](/D:/code/appDuong/blog.html) into a WordPress production build covering:
- blog archive
- single post layout
- taxonomy navigation
- CTA blocks

## Current Constraint
- WordPress is still not running in this workspace.
- This spec prepares Step 17 accurately, but the step cannot be marked complete until the archive and single post templates are actually built in WordPress.

## Source Of Truth
This build spec is based on:
- [blog.html](/D:/code/appDuong/blog.html)
- [script.js](/D:/code/appDuong/script.js)
- [wordpress-cms-structure.md](/D:/code/appDuong/wordpress-cms-structure.md)
- [content-entry-workbook.md](/D:/code/appDuong/content-entry-workbook.md)

## Blog Goals
The blog must:
- support SEO without feeling disconnected from the business
- keep knowledge practical and action-oriented
- show audience and topic clearly
- route readers toward shop or consultation

## Required Templates
Build:
- blog archive template
- single post template

Optional later:
- audience taxonomy archive
- topic taxonomy archive

## 1. Blog Archive Template

### Purpose
- organize educational content clearly
- allow readers to understand who each article is for
- keep the archive scan-friendly

### Archive header
Render:
- eyebrow: `Blog / Knowledge`
- heading
- supporting intro copy

Starter tone from MVP:
- knowledge should lead to action, not just pageviews
- blog supports SEO and connects directly to shop and consultation

### Taxonomy chips / nav
At the top of the grid, show lightweight taxonomy chips for:
- Nguoi cao tuoi
- An chay truong
- Co ban
- Cong thuc
- Loi ich suc khoe

### Data source
Use the custom taxonomies:
- `audience`
- `topic`

### Interaction recommendation
Acceptable first implementations:
- visual chips linking to taxonomy archives
- filter-style query param links
- Elementor loop query variations if available

Preferred first implementation:
- keep taxonomy chips simple and link-driven
- avoid building a heavy JS filter system for the blog archive

## 2. Archive Article Card

### Required card fields
Each article card should render:
- audience tag
- topic tag
- post title
- read time if available
- short summary or excerpt

### Data source
Use:
- WordPress post title
- `audience` terms
- `topic` terms
- `read_time_label` if implemented
- excerpt or custom summary

### Visual rules
- keep cards concise
- use the shared article-card style
- do not show author/date blocks too prominently unless editorially necessary

## 3. Archive CTA Band

### Purpose
- turn knowledge into action
- keep the user’s next step visible after browsing content

### Required CTA options
- primary CTA to shop
- secondary CTA to consultation

Starter structure from MVP:
- heading asks what comes next after understanding the issue
- body says Veggevity keeps a CTA near the content

## 4. Single Post Template

### Purpose
- make posts readable and calm
- keep the article useful without becoming visually dense
- provide a clear next step

### Required sections
1. post header
2. article body
3. taxonomy / meta support
4. related or next-step section
5. CTA band

### 4.1 Post header
Render:
- audience term
- topic term
- title
- optional read time
- optional short intro/excerpt

### 4.2 Article body
Rules:
- prioritize readability
- keep content width comfortable
- use headings and paragraphs generously
- avoid dense sidebars in the first build

### 4.3 Related or next-step section
Acceptable options:
- related posts by shared taxonomy
- simple contextual next links

Preferred first implementation:
- 2 to 3 related posts or links to adjacent actions

## 5. CTA Block Logic

### Purpose
- connect educational content to commerce and consultation

### CTA mode
If needed later, use the optional post field:
- `cta_mode`

Possible values:
- `shop`
- `consultation`
- `both`

### Default behavior
If no custom CTA mode is set:
- show both shop and consultation options

### Placement
Recommended placement:
- after the article body
- before the footer

## 6. Content Model Mapping
| Element | Data source |
| --- | --- |
| Archive cards | standard posts |
| Audience labels | taxonomy `audience` |
| Topic labels | taxonomy `topic` |
| Read time | optional `read_time_label` |
| Summary | excerpt or custom summary |
| CTA mode | optional `cta_mode` |

## 7. Seed Content To Use
Use the workbook seed posts first:
- Nguoi an chay truong can theo doi B12 nhu the nao?
- 3 mau bua sang mem, de tieu cho nguoi lon tuoi
- An chay va suc khoe xuong: nen uu tien thuc pham nao?

## 8. Build Rules
- keep the archive and posts calm, practical, and scan-friendly
- do not turn the archive into a generic magazine layout
- do not use a slider for featured posts in the first build
- keep CTA blocks editorially aligned with the article context
- keep taxonomy labels visible but restrained

## 9. QA Checklist
- archive loads the expected posts
- taxonomy chips link correctly
- article cards show audience and topic clearly
- single post layout remains readable on mobile
- CTA block appears on posts
- CTA links route to shop and consultation correctly

## 10. Completion Condition For Step 17
Step 17 should be marked complete only after:
- the blog archive template is built
- the single post template is built
- taxonomy labels render correctly
- CTA blocks are functional on posts
