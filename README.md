# MaoMao Cat Shop 🐱

เว็บไซต์แคตตาล็อกสินค้าแมวภาษาไทย สร้างด้วย **Astro**, **Tailwind CSS** และ **Keystatic** เหมาะสำหรับใช้เป็นตัวอย่างการเรียนรู้การพัฒนาเว็บไซต์แบบ Static Site ที่มีระบบจัดการเนื้อหาอย่างง่าย

> โปรเจกต์นี้เป็นเว็บไซต์แคตตาล็อกและบทความ ไม่ใช่ระบบ Ecommerce เต็มรูปแบบ การสอบถามสินค้าและการสั่งซื้อจะจบที่ LINE OA โดยไม่มีตะกร้า ชำระเงิน สมาชิก หรือระบบหลังบ้านสำหรับคำสั่งซื้อ

## ภาพรวมโปรเจกต์

MaoMao Cat Shop ช่วยให้ผู้ใช้งาน:

- เลือกดูอาหารแมว ทรายแมว ขนม และอุปกรณ์แมว
- เปิดอ่านรายละเอียดสินค้าแต่ละรายการ
- ค้นหาสินค้าตามหมวดหมู่และแบรนด์
- อ่านบทความเกี่ยวกับอาหารและการดูแลแมว
- ติดต่อร้านผ่าน LINE เพื่อสอบถามรายละเอียดก่อนตัดสินใจ

เว็บไซต์อ้างอิงงานออกแบบจาก Google Stitch และรักษารูปแบบเดิมไว้ ทั้งสี ตัวอักษร ระยะห่าง การ์ดสินค้า และลำดับเนื้อหา

## สิ่งที่นักเรียนจะได้เรียนรู้

- การสร้าง Static Site ด้วย Astro
- การจัดหน้า Responsive ด้วย Tailwind CSS
- การสร้าง Dynamic Route แบบ Static เช่น `/products/[slug]/`
- การใช้ Astro Content Collections กับไฟล์ Markdown
- การสร้างระบบแก้ไขบทความและสินค้าด้วย Keystatic
- การจัดการ SEO metadata, sitemap, RSS และ JSON-LD
- การทำเว็บไซต์ให้ใช้งานด้วยคีย์บอร์ดและโปรแกรมอ่านหน้าจอได้ดีขึ้น
- การแยกข้อมูลเว็บไซต์ การตั้งค่า และ UI Component ออกจากกัน

## เทคโนโลยีที่ใช้

| เทคโนโลยี | หน้าที่ |
|---|---|
| [Astro](https://astro.build/) | สร้างหน้าเว็บแบบ Static HTML |
| [Tailwind CSS](https://tailwindcss.com/) | จัดรูปแบบและ Responsive Layout |
| [Keystatic](https://keystatic.com/) | แก้ไขบทความและข้อมูลสินค้าในเครื่อง |
| Markdown | จัดเก็บเนื้อหาบทความและรายละเอียดสินค้า |
| TypeScript | ตรวจสอบชนิดข้อมูลและลดข้อผิดพลาด |

React และ Markdoc ถูกใช้เฉพาะส่วน Keystatic Editor ในโหมดพัฒนา หน้าเว็บไซต์จริงยังคงเป็น Static HTML และไม่มีการ Hydrate React โดยไม่จำเป็น

## เริ่มต้นใช้งาน

### 1. เตรียมเครื่องมือ

แนะนำให้ติดตั้ง:

- Node.js 20 LTS
- npm
- Git

ตรวจสอบเวอร์ชันด้วยคำสั่ง:

```bash
node --version
npm --version
git --version
```

### 2. Clone และติดตั้ง Dependencies

```bash
git clone https://github.com/son-content-mastery/ai-web-mastery-1-cat-shop.git
cd ai-web-mastery-1-cat-shop
npm install
```

### 3. เปิด Development Server

```bash
npm run dev
```

จากนั้นเปิดเว็บไซต์ที่:

```text
http://127.0.0.1:4321/
```

## การใช้ Keystatic Editor

เมื่อ `npm run dev` ทำงานอยู่ ให้เปิด:

```text
http://127.0.0.1:4321/keystatic/
```

ใน Editor สามารถ:

- เพิ่ม แก้ไข หรือลบบทความ
- แก้ไขชื่อสินค้า ราคา หมวดหมู่ รูปภาพ รหัสสินค้า และรายละเอียดสินค้า
- เลือกสินค้าที่ต้องการแสดงบนหน้าแรก
- จัดลำดับสินค้า

Keystatic ในโปรเจกต์นี้ใช้ **Local Mode** การกดบันทึกจึงแก้ไขไฟล์ Markdown และรูปภาพใน repository โดยตรง ควรตรวจสอบไฟล์ที่เปลี่ยนแปลงด้วย `git status` ก่อน commit ทุกครั้ง

> Keystatic Editor เปิดเฉพาะตอนพัฒนาในเครื่อง และจะไม่ถูกนำไปรวมใน Production Build แบบ Static

## คำสั่งที่ใช้บ่อย

| คำสั่ง | รายละเอียด |
|---|---|
| `npm run dev` | เปิด Development Server และ Keystatic |
| `npm run check` | ตรวจสอบ TypeScript และ Astro |
| `npm run build` | สร้าง Production Build ในโฟลเดอร์ `dist/` |
| `npm run preview` | ทดลองเปิดเว็บไซต์จาก Production Build |

ก่อนส่งงานหรือเปิด Pull Request แนะนำให้รัน:

```bash
npm run check
npm run build
git diff --check
```

## เส้นทางหลักของเว็บไซต์

| URL | เนื้อหา |
|---|---|
| `/` | หน้าแรก |
| `/products/` | รายการสินค้าทั้งหมดและตัวกรอง |
| `/products/[slug]/` | รายละเอียดสินค้าและปุ่มติดต่อ LINE |
| `/categories/cat-food/` | หมวดอาหารแมว |
| `/categories/cat-litter/` | หมวดทรายแมว |
| `/brands/royal-canin/` | สินค้าแบรนด์ Royal Canin |
| `/brands/maxima/` | สินค้าแบรนด์ Maxima |
| `/blog/` | รายการบทความ |
| `/blog/[slug]/` | เนื้อหาบทความ |
| `/about/` | เกี่ยวกับเว็บไซต์ |
| `/contact/` | ช่องทางติดต่อ |
| `/purchasing/` | วิธีสั่งซื้อผ่าน LINE |
| `/privacy/` | นโยบายความเป็นส่วนตัว |
| `/rss.xml` | RSS Feed ของบทความ |
| `/keystatic/` | Content Editor เฉพาะ Development Mode |

## โครงสร้างโปรเจกต์

```text
.
├── public/
│   └── images/                 # รูปภาพที่เว็บไซต์ใช้งาน
├── references/                 # ไฟล์อ้างอิงจาก Stitch และข้อมูล SEO ห้ามแก้ไข
├── docs/                       # เอกสารสถาปัตยกรรม เนื้อหา SEO และ QA
├── src/
│   ├── components/             # UI Component ที่นำกลับมาใช้ซ้ำ
│   ├── config/site.ts          # ชื่อเว็บไซต์ Domain และข้อมูล LINE
│   ├── content/
│   │   ├── blog/               # บทความ Markdown
│   │   ├── products/           # ข้อมูลสินค้าและรายละเอียด Markdown
│   │   └── config.ts           # Schema สำหรับ Astro Content Collections
│   ├── layouts/                # Layout หลักและ Metadata
│   ├── lib/                    # ตัวช่วยอ่านข้อมูลและ Structured Data
│   ├── pages/                  # Route ของเว็บไซต์
│   └── styles/                 # Global CSS
├── astro.config.mjs            # การตั้งค่า Astro
├── keystatic.config.ts         # Schema ของ Keystatic Editor
├── tailwind.config.mjs         # Design Token และ Tailwind Theme
└── package.json                # Scripts และ Dependencies
```

## การเพิ่มเนื้อหา

วิธีที่ง่ายที่สุดคือใช้ Keystatic Editor แต่สามารถแก้ไข Markdown โดยตรงได้เช่นกัน:

- บทความ: `src/content/blog/`
- สินค้า: `src/content/products/`

ชื่อไฟล์ Markdown จะกลายเป็น `slug` ของ URL ตัวอย่าง:

```text
src/content/blog/choose-cat-litter.md
→ /blog/choose-cat-litter/
```

อย่าลืมตรวจสอบให้ข้อมูลตรงกับ Schema ใน `src/content/config.ts` และ `keystatic.config.ts`

## ข้อควรตรวจสอบก่อนเผยแพร่จริง

ข้อมูลหลายส่วนใน repository ยังเป็นข้อมูลตัวอย่าง ก่อนนำไปใช้จริงต้องตรวจสอบ:

- เปลี่ยน `https://example.invalid` เป็น Domain จริง
- เปลี่ยน LINE OA `@REPLACE_ME` และ URL ให้เป็นบัญชีจริง
- ตรวจสอบชื่อสินค้า สูตร ราคา น้ำหนัก และข้อมูลบนฉลาก
- ตรวจสอบชื่อธุรกิจ นโยบายความเป็นส่วนตัว และเงื่อนไขการสั่งซื้อ
- ตรวจสอบรูปภาพและสิทธิ์การใช้งาน
- ทดสอบทุกลิงก์และทุกขนาดหน้าจอ

ค่าหลักของเว็บไซต์และ LINE อยู่ที่:

```text
src/config/site.ts
```

ไม่ควรเขียน LINE URL ซ้ำไว้ใน Component หรือหน้าอื่น

## เอกสารเพิ่มเติม

- [`AGENTS.md`](AGENTS.md) — ข้อกำหนดสำหรับผู้ช่วยเขียนโค้ด
- [`DESIGN.md`](DESIGN.md) — Design System ที่ได้จาก Stitch
- [`docs/architecture.md`](docs/architecture.md) — สถาปัตยกรรมโปรเจกต์
- [`docs/content-model.md`](docs/content-model.md) — รูปแบบข้อมูลสินค้าและบทความ
- [`docs/information-architecture.md`](docs/information-architecture.md) — โครงสร้าง URL
- [`docs/seo-keyword-map.md`](docs/seo-keyword-map.md) — การจับคู่ Keyword กับหน้าเว็บ
- [`docs/qa-checklist.md`](docs/qa-checklist.md) — Checklist ก่อนเผยแพร่
- [`docs/deployment.md`](docs/deployment.md) — ข้อควรระวังในการ Deploy

## License

โปรเจกต์นี้เป็น Open Source ภายใต้ [MIT License](LICENSE) สามารถนำไปใช้ คัดลอก แก้ไข แจกจ่าย และต่อยอดได้ตามสะดวก ทั้งสำหรับการเรียนรู้ โปรเจกต์ส่วนตัว และงานเชิงพาณิชย์ โดยเป็นไปตามเงื่อนไขของ MIT License

สร้างและแบ่งปันโดย [Web Mastery](https://webmastery.dev/) ขอให้สนุกกับการเรียนรู้และนำไปพัฒนาต่อครับ 🚀
