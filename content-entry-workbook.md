# Veggevity Content Entry Workbook

## Purpose
This workbook is the fallback deliverable for the current phase because the repository does not yet contain a real WordPress runtime.

Use it to:
- prepare production content before WordPress is provisioned
- enter content consistently into `WordPress + Elementor + WooCommerce + ACF`
- reduce rework when Step 10 becomes available

## Current Build Constraint
- WordPress is not installed in this workspace yet.
- The static MVP is the source of truth for page structure, sample copy, sample products, sample blog cards, and nutrition demo data.
- Step 10 remains open until a real WordPress environment exists.

## Recommended Setup Inputs For Step 10

### WordPress stack to install
- WordPress
- Hello Elementor
- Elementor Pro
- WooCommerce
- ACF Pro
- Fluent Forms or Gravity Forms
- Rank Math or Yoast SEO
- LiteSpeed Cache if supported, otherwise WP Rocket
- Tidio
- Filter Everything or FacetWP if the WooCommerce filters need plugin support

### Base settings to configure
- Site language: `Vietnamese`
- Permalink structure: `Post name`
- Timezone: `Asia/Ho_Chi_Minh`
- Homepage: `Trang chủ`
- Posts page: `Kiến thức`
- Shop page: `Cửa hàng`
- Currency: `VND`

## Global Site Settings
Create one ACF options group or equivalent global settings area with these values.

| Field | Type | Starter value | Notes |
| --- | --- | --- | --- |
| Brand name | Text | Veggevity | Final production value can remain unchanged |
| Tagline | Text | An chay du chat, mua sam de hieu | Replace with approved Vietnamese diacritic version when production encoding is confirmed |
| Primary color | Text | `#2E7D32` | Match current MVP |
| Secondary color | Text | `#0288D1` | Match current MVP |
| Hotline | Text | 0909 888 120 | Placeholder unless this is the real hotline |
| Zalo label | Text | Veggevity Care | Placeholder |
| Zalo link | URL | `TBD` | Missing from MVP |
| Contact email | Email | hello@veggevity.vn | Placeholder unless approved |
| Support hours | Text | 08:00 - 20:00 moi ngay | From MVP footer |
| Footer copy | Textarea | Dinh duong chay khoa hoc cho nhip song hien dai | Final copy should be approved |
| Consultation CTA label | Text | Bat dau tu van | Shared header CTA |
| Consultation CTA link | URL | `/tu-van/` | Final slug can differ |
| Social links | Repeater | `TBD` | Not defined in MVP |

## Shared Navigation
Use these labels in the primary navigation.

| Label | Suggested slug | Source |
| --- | --- | --- |
| Trang chu | `/` | MVP nav |
| Cua hang | `/cua-hang/` | MVP nav |
| Dinh duong | `/dinh-duong/` | MVP nav |
| Kien thuc | `/kien-thuc/` | MVP nav |
| Tu van | `/tu-van/` | MVP nav |
| Ve Veggevity | `/ve-veggevity/` | MVP nav |

## Homepage Content
Create one homepage entry with these fields.

### Hero
| Field | Type | Starter value |
| --- | --- | --- |
| Hero eyebrow | Text | Veggevity · Healthy · Scientific · Accessible |
| Hero heading | Text | An chay dung cach, mua sam tu tin hon. |
| Hero supporting copy | Textarea | Veggevity ket noi mon chay tien loi, kien thuc dinh duong chuan khoa hoc va trai nghiem tu van de hieu cho nguoi an chay truong lan nguoi lon tuoi can thuc don an tam. |
| Hero primary CTA label | Text | Kham pha cua hang |
| Hero primary CTA link | URL | `/cua-hang/` |
| Hero secondary CTA label | Text | Tra cuu dinh duong |
| Hero secondary CTA link | URL | `/dinh-duong/` |

### Trust metrics
| Label | Value | Note |
| --- | --- | --- |
| Mo-dun noi dung MVP | 06 | Can be removed in production if too prototype-like |
| Tin hieu noi dung | B12 | Convert into a stronger proof point later |
| Readability focus | 60+ | Keep as design principle, not necessarily public copy |

### Why choose Veggevity
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | Tai sao chon Veggevity |
| Heading | Text | Khong chi ban mon chay. Chung toi ban su ro rang. |
| Intro copy | Textarea | Tu PRD, Veggevity can giai quyet hai van de cung luc: quan chay nho thieu nen tang online, va nguoi dung thieu thong tin dinh duong dang tin. |

### Why choose cards
| Title | Body |
| --- | --- |
| Shop co ngu canh dinh duong | The san pham co nhan phu hop cho nguoi lon tuoi, B12, canxi hoac it nang luong. |
| Noi dung de quet | Phan tang thong tin de nguoi doc lon tuoi khong bi qua tai boi qua nhieu lua chon. |
| Tu van dan dat chuyen doi | Tu van co ban khong tach roi mua sam ma tro thanh buoc xay long tin. |
| Cau truc WordPress-ready | Cac khoi noi dung va mo-dun trang da duoc chia de de map sang Elementor sau nay. |

### Homepage structure section
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | Cau truc trang chu |
| Heading | Text | Mot homepage dai, nhung khong dong duc. |
| Supporting copy | Textarea | Giu cach to chuc theo section va trust-heavy business hub, nhung uu tien ba luong ro: mua hang, hoc dinh duong, va lien he tu van. |

### Featured products section
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | San pham noi bat |
| Heading | Text | Cac lua chon phu hop cho nhip song that. |
| Intro copy | Textarea | Nhung san pham nay dai dien cho cach Veggevity the hien thong tin de hieu ngay tren tang overview. |
| Product selection | Relationship | Product IDs 1, 2, 3, 5 from MVP |

### Nutrition teaser
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | Widget dinh duong nhanh |
| Heading | Text | Tra cuu mot nguyen lieu truoc khi quyet dinh bua an. |
| Intro copy | Textarea | MVP dung dataset nho de minh hoa huong di cua core feature. |
| CTA label | Text | Tra cuu nhanh |
| CTA link | URL | `/dinh-duong/` |

### Testimonials
| Quote | Attribution |
| --- | --- |
| Me toi 68 tuoi van doc duoc rat thoai mai. | Gia dinh khach hang thu MVP |
| Toi thich vi thong tin B12 khong bi noi chung chung. | Nguoi an chay truong 5 nam |
| Mua hang va tim hieu kien thuc khong con la hai viec tach roi. | Nguoi dung thu nghiem noi dung |

### Blog preview
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | Bai viet noi bat |
| Heading | Text | Kien thuc ngan, du dung, co phan loai nguoi doc. |
| Featured posts | Relationship | Use the 3 seed posts below |

### Final CTA
| Field | Type | Starter value |
| --- | --- | --- |
| Heading | Text | Bat dau tu nhu cau that cua ban. |
| Supporting copy | Textarea | Kham pha mon chay, doc huong dan dinh duong hoac gui yeu cau tu van ca nhan hoa. |
| Primary CTA | Text | Vao cua hang |
| Secondary CTA | Text | Gui yeu cau tu van |

## WooCommerce Product Entry
Create WooCommerce products plus ACF fields for `prep_time`, `senior_friendly`, `nutrition_badges`, `nutrition_note`, and `primary_nutrition_highlight`.

| MVP ID | Product name | Type | Price | Price band | Prep time | Prep band | Senior friendly | Description | Badges |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Bun nam thanh dam | meal | 79.000d | mid | 15 | fast | yes | Nuoc dung rau cu diu vi, de tieu hoa va giau chat xo. | Bo sung sat; Nguoi lon tuoi; It dau |
| 2 | Com gao lut ngu sac | meal | 92.000d | mid | 20 | medium | yes | Khau phan can bang voi dau, hat va rau cu hap. | Protein tot; Canxi; No lau |
| 3 | Set soup mem xuong khop | meal | 118.000d | high | 25 | medium | yes | Set soup, dau hu non va rau cu mem danh cho nguoi an nhe. | Nguoi lon tuoi; Canxi; It muoi |
| 4 | Granola hat sen huu co | snack | 59.000d | low | 5 | fast | no | Bua phu tien loi voi yen mach, hat sen va hanh nhan. | Snack lanh manh; Chat xo; Mang di |
| 5 | Sua hat B12 boost | drink | 42.000d | low | 5 | fast | yes | Sua hat bo sung vitamin B12 cho nguoi an chay truong. | B12; Uong lien; Khong duong tinh luyen |
| 6 | Combo thuc don 3 ngay | combo | 329.000d | high | 30 | slow | no | Goi bua chay theo ngay cho nguoi ban ron can kiem soat dinh duong. | Meal plan; Kiem soat nang luong; Tien loi |

### Product taxonomies or attributes
- Product type: `meal`, `snack`, `drink`, `combo`
- Price band: `low`, `mid`, `high`
- Prep band: `fast`, `medium`, `slow`
- Elderly-friendly: `yes`, `no`
- Nutrition badges:
  `B12`, `Canxi`, `Bo sung sat`, `Protein tot`, `It dau`, `It muoi`, `No lau`, `Meal plan`, `Kiem soat nang luong`, `Snack lanh manh`, `Chat xo`, `Mang di`, `Uong lien`, `Khong duong tinh luyen`, `Nguoi lon tuoi`

## Nutrition Item Dataset
Create a `nutrition_item` custom post type or equivalent custom table later if scale grows.

| Key | Display label | Aliases | Protein | B12 | Calcium | Iron | Recommendation note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| dau_hu | Dau hu | dau hu, dau hu non, dau phu | 8g | 0mcg | 350mg | 1.6mg | Nguon protein va canxi tot, nen ket hop voi thuc pham tang cuong B12. |
| nam | Nam | nam, mushroom | 3g | 0mcg | 18mg | 0.5mg | It nang luong, hop voi mon thanh dam va thuc don nguoi lon tuoi. |
| rau_den | Rau den | rau den, amaranth greens | 2.6g | 0mcg | 215mg | 2.3mg | Ho tro canxi va sat thuc vat, nen dung kem vitamin C de tang hap thu. |
| sua_hat | Sua hat tang cuong | sua hat, sua hat tang cuong | 6g | 1.2mcg | 250mg | 1.1mg | Lua chon thuc te cho nguoi an chay truong can B12 va canxi. |
| dau_lang | Dau lang | dau lang, lentils | 9g | 0mcg | 19mg | 3.3mg | Giau dam va sat, hop cho bua chinh hoac soup. |
| hat_chia | Hat chia | hat chia, chia seeds | 4g | 0mcg | 179mg | 2.2mg | Bo sung khoang chat tot trong khau phan nho. |

## Meal Suggestion Blocks
Use these as repeaters or fixed content sections on the Nutrition page.

### Audience: elderly
- Chao yen mach voi sua hat tang cuong va hat chia ngam mem.
- Com gao lut mem, canh rau den, dau hu sot nam it dau.
- Soup dau lang xay min voi banh mi nguyen cam mem.

### Audience: longterm vegetarian
- Tang cuong B12 tu sua hat bo sung hoac thuc pham tang cuong moi ngay.
- Luan phien dau hu, tempeh, dau lang va cac loai hat de da dang axit amin.
- Theo doi sat, canxi, B12 va vitamin D trong khau phan hang tuan.

### Audience: bone support
- Uu tien rau xanh dam, sua hat tang cuong, dau hu canxi va hat chia.
- Giam mon qua man, tang cac bua giau canxi va vitamin D.
- Ket hop van dong nhe va phoi nang phu hop ben canh khau phan.

### Audience: blood sugar support
- Chon bua co chat xo cao, dam thuc vat va tinh bot cham nhu gao lut.
- Han che do uong ngot, uu tien snack hat va trai cay nguyen qua.
- Chia nho bua neu can on dinh nang luong trong ngay.

## Blog Seed Content
Create standard WordPress posts with categories or custom taxonomies for audience and topic.

| Title | Audience | Topic | Read time | Summary |
| --- | --- | --- | --- | --- |
| Nguoi an chay truong can theo doi B12 nhu the nao? | An chay truong | Dinh duong khoa hoc | 6 phut doc | Khung thuc hanh don gian de theo doi dau hieu thieu hut va chon nguon bo sung phu hop. |
| 3 mau bua sang mem, de tieu cho nguoi lon tuoi | Nguoi cao tuoi | Thuc don | 4 phut doc | Cac lua chon it dau, de nhai va van dam bao dam, canxi va nang luong. |
| An chay va suc khoe xuong: nen uu tien thuc pham nao? | Co ban | Loi ich suc khoe | 5 phut doc | Canxi, vitamin D, protein va thoi quen an uong nao can xuat hien deu dan. |

### Suggested blog taxonomy
- Audience:
  `Nguoi cao tuoi`, `An chay truong`, `Co ban`
- Topic:
  `Dinh duong khoa hoc`, `Thuc don`, `Loi ich suc khoe`, `Cong thuc`

## Consultation Form Specification
Replace the MVP browser-local storage behavior with a real forms plugin workflow.

| Field | Type | Required | Source |
| --- | --- | --- | --- |
| Full name | Text | yes | MVP form |
| Age | Number | yes | MVP form |
| Main goal | Text | yes | MVP form |
| Current eating habits | Textarea | yes | MVP form |
| Optional notes | Textarea | no | Blueprint requirement |
| Phone or email | Text | yes | Blueprint requirement |

### Admin workflow
- Send admin email on submission
- Store entries in the forms plugin
- Show thank-you confirmation message
- Optional later sync to CRM

## About / Contact Content

### Brand story
| Field | Type | Starter value |
| --- | --- | --- |
| Section badge | Text | Brand Story |
| Heading | Text | Veggevity sinh ra de lam ro nhung gi nguoi an chay thuong phai tu doan. |
| Body copy | Textarea | Tu nhu cau cua cac quan chay nho va nguoi dung can huong dan dinh duong de hieu, Veggevity duoc dinh vi la mot nen tang digital-first, khoa hoc va gan gui. |

### Team or advisor cards
| Role | Description |
| --- | --- |
| Nutrition Lead | Chiu trach nhiem chuyen guideline khoa hoc thanh ngon ngu de doc, de ap dung. |
| Product Curator | Chon nhom mon chay va to chuc badge de ho tro ra quyet dinh nhanh hon. |
| Customer Care | Giu mach tu van, hotline, Zalo va cac follow-up sau khi nguoi dung gui form. |

### Contact cards
| Field | Starter value |
| --- | --- |
| Hotline | 0909 888 120 |
| Zalo | Veggevity Care |
| Email | hello@veggevity.vn |

## Content Still Missing Before Production
- Approved Vietnamese copy with final encoding and proofreading
- Real brand contact details
- Real product imagery
- Real testimonial permissions
- Real expert names and bios
- Full nutrition data validation
- Real blog body copy, not just cards
- Contact form recipient addresses
- Zalo destination link

## Exit Criteria For This Workbook
This workbook is complete enough when:
- every homepage section has a named content source
- every product field can be entered without guessing
- every nutrition item includes aliases and metric values
- the consultation form fields and admin workflow are fixed
- missing production data is clearly separated from placeholder MVP data
