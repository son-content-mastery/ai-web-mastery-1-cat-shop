# MaoMao Cat Shop agent guide

## Project summary and authority
This is a static Astro and Tailwind catalog/content website for Thai cat products. The conversion path ends at LINE OA; it is not transactional ecommerce. Authority order is: current user instruction, applicable nested `AGENTS.md`, this file, root `DESIGN.md`, `docs/`, configuration, implementation, Stitch screenshot, Stitch specification/tokens, Stitch HTML, assumptions.

The Google Stitch design is mandatory. Agents must not redesign the site, change its visual identity, or make permanent design changes without explicit user approval. Inspect `references/stitch/stitch_maomao_cat_shop_storefront.zip` before any visual work. Root `DESIGN.md` is derived from that export. `references/seo/keyword_research.csv` influences SEO and content only, never visual design. Files in `references/` are immutable.

## Required reading by task

- Visual/UI: `DESIGN.md`, `docs/stitch-migration.md`, and the ZIP screenshot/spec.
- Routes/content/SEO: `docs/information-architecture.md`, `docs/content-model.md`, `docs/seo-keyword-map.md`.
- Components: `docs/architecture.md`, `docs/component-guidelines.md`.
- Release/QA: `docs/qa-checklist.md`, `docs/deployment.md`.

## Repository map and commands

- `src/pages/`: static and generated routes; `src/components/`: repeated visual patterns.
- `src/data/catalog.ts`: typed demo catalog and articles; `src/config/site.ts`: site and LINE data.
- `src/styles/global.css`, `tailwind.config.mjs`: Stitch tokens and global behavior.
- `public/images/`: locally migrated Stitch assets; `docs/`: maintained project documentation.
- `references/`: immutable source ZIP and CSV.

Use npm. Verified scripts are `npm run dev`, `npm run build`, `npm run preview`, and `npm run check`. Also run `git diff --check` and scoped `git status --short -- .`.

## Architecture and Tailwind rules

Keep static output. Use Astro components for static UI and scoped vanilla JavaScript only for mobile navigation, filters/search, gallery, and copy-code interactions. Do not add React, Vue, Svelte, Solid, a UI library, or unnecessary hydration. Componentize repeated patterns, not decorative fragments. Use semantic HTML and stable public URLs. Extend existing Tailwind tokens; do not introduce an independent palette, type scale, radii, shadows, container width, or card style. Preserve unusual Stitch values and document conflicts.

## Stitch migration and content rules

Screenshots are visual authority, design tokens are token authority, and generated HTML is structural reference. Correct invalid semantics, accessibility, performance, and Astro compatibility while preserving appearance. Missing states must be inferred conservatively and recorded in `DESIGN.md`. Reuse local assets; never hotlink temporary Google URLs. Do not invent reviews, ratings, stock, urgency, veterinary endorsements, certifications, health guarantees, business details, domains, or LINE accounts. Mark demo/placeholder data.

## SEO, accessibility, and performance

Give each page one H1, unique metadata, canonical/OG/Twitter data, landmarks, breadcrumbs where appropriate, internal links, and descriptive alt text. Keep keyword use natural and follow `docs/seo-keyword-map.md`; do not create thin pages. Target practical WCAG 2.2 AA: keyboard operation, visible focus, native controls, programmatic state, touch targets, skip link, contrast, and reduced motion. Prefer local responsive images, stable dimensions, lazy loading below the fold, CSS transitions, and tiny scoped scripts.

## Product conversion, Git, and safety

Every product card links to its detail page. The primary detail CTA goes to the centralized LINE URL in `src/config/site.ts`. No cart, cart icon, Add to Cart, quantity, checkout, payment, login, registration, accounts, orders, wishlist, inventory, admin, or unused related code may be added. Do not edit generated directories, dependencies by hand, raw references, or unrelated user changes. Do not commit, push, merge, deploy, reset, or expose credentials unless explicitly authorized.

## Validation and completion report

Run configured checks and search for placeholder links, cart/checkout language, temporary Google URLs, missing alt text, duplicate H1s, hardcoded LINE URLs, fake review schema, broken internal links, and nonexistent documentation commands. Visually compare priority pages at 375, 768, 1024, and the reference viewport when browser tooling is available. Completion reports must state actual routes/components/assets, placeholders, differences, validation results, files changed, and confirm no redesign or Git/deployment action.
