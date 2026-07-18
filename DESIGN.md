# Design System

## Status and Authority

- Status: Active
- Authority: Maintained implementation reference derived from Google Stitch
- Scope: Entire website
- Original export: `references/stitch/stitch_maomao_cat_shop_storefront.zip`
- Last reviewed: 2026-07-12

The Stitch screenshots are visual authority; their `DESIGN.md` tokens are token authority; exported `code.html` files are migration references. New screens retain the same language rather than establishing a second identity.

## Stitch Source Inventory

The repository ZIP contains `screen.png` (854×1600 product listing), `DESIGN.md`, and `code.html`. It provides the desktop listing, header, filters, three product cards, pagination, supporting copy, three article cards, footer, and floating LINE CTA. A second user-supplied Stitch export at `/Users/sonny/Downloads/final_home_cat` provides the homepage screenshot (371×1600), tokens, and generated HTML: announcement bar, hero, circular categories, needs chips, eight featured cards, benefits, brand strip, articles, LINE CTA, and footer. Its 21 remote raster assets were migrated locally. No detail/gallery, category/brand, blog listing/article, informational page, 404, navigation-open, filter-open/empty, disabled, or gallery-state screen exists; those states are conservative inferences.

## Brand Identity

“Sophisticated Warmth”: premium Thai cat care with generous whitespace, crisp low-contrast borders, editorial photography, and disciplined conversion color. It intentionally avoids dense marketplace styling.

## Colors

- Core: surface `#fcf8fb`, white `#ffffff`, ink `#1b1b1d`, muted brown `#5c403b`, primary `#b50c08`, primary container `#d92d20`.
- Supporting: surface low `#f6f3f5`, container `#f0edef`, high `#eae7ea`, highest `#e4e2e4`, outline `#906f6a`, outline variant `#e5bdb7`.
- LINE: `#06c755`, reserved for LINE conversion.
- Semantic: success `#006e2b`, error `#ba1a1a`; secondary token `#006e2b` is used for “new”.
- Legacy generated colors retained in the source inventory but unused include inverse/fixed/tertiary/error-container variants from the ZIP front matter. The prose section also names `#b42318`, `#fef3f2`, `#fffbfa`, and `#e8e4e3`; where it conflicts, exact front-matter tokens and screenshot appearance win.

## Typography

IBM Plex Sans Thai is the display/heading face; Noto Sans Thai is body/label, with Tahoma and sans-serif fallbacks. Stitch tokens: hero 56/1.2 700 with −.02em tracking; mobile hero 36/1.2; section title 36/1.3 700, mobile 28/1.3; card heading 22/1.4 600; body 17/1.7 400; label 14/1.2 500. Responsive CSS uses fluid interpolation only between the stated mobile and desktop endpoints.

## Layout

Maximum container is 1280px, desktop gutter 24px, mobile margin 16px, 12-column desktop concept, and single-column mobile stack. Major gaps are 80–120px; card internals use an 8px rhythm. Listing is a 288px filter column plus flexible 3-column grid; cards collapse to 2 and then 1 column. Articles use three columns and a 760px reading measure. Product detail uses equal gallery/content columns; thumbnails sit left on desktop and below the main image on mobile.

## Radius, Borders, and Shadows

Tokens are 4, 8, 12, 16, 24px and pill. Controls use 8px, cards 12px. Surfaces use 1px low-contrast borders. Base cards are flat/ambient (`0 2px 4px` at 4%); hover uses `0 8px 16px` at 12%. LINE uses `0 4px 14px rgba(6,199,85,.39)`.

## Components

- Header: sticky warm-white, thin border, red wordmark, horizontal navigation, LINE CTA; mobile uses a bordered menu control and stacked links.
- Buttons: red primary, LINE green conversion, or pale/outlined ghost, all minimum 44px touch height where actionable.
- Product cards: white, 12px radius, square image crop, uppercase red brand, restrained price, outlined detail CTA; whole image/title links to detail.
- Category/brand cards: white outlined content blocks using the product-card geometry.
- Article cards: 16:9 image, 12px radius, title/date below.
- Filters: white outlined panel, native checkboxes with red accent; mobile collapsible panel; empty state uses the same white surface.
- Pagination/breadcrumb: compact outlined controls and muted trail with red hover.
- Gallery: square main frame, 80px thumbnails, red selected border, circular previous/next controls.
- FAQ/content/CTA: bordered white blocks, editorial headings, LINE green only for contact.
- Footer: white, thin top border, four-column desktop/two-column mobile composition matching Stitch.

## Interaction States

Hover lifts cards and gently scales images; primary text/outline controls fill red where shown. Focus uses a visible 3px primary outline. Selected navigation/thumbnail/filter states use red plus programmatic state. Disabled pagination is non-interactive muted text. Open menus/filters expose content and update `aria-expanded`. Empty results show a textual white panel. Reduced-motion removes transition duration.

## Responsive Rules

At 375px sections stack, header navigation becomes a menu, LINE label may shorten, filters collapse, gallery thumbnails move below, and footer becomes two columns. At 768px most grids become two columns; at 1024px listing reaches three cards while header remains compact; at 1280+ the full navigation and 1280px maximum apply. Long Thai text wraps naturally without fixed heights except small card-description rhythm.

## Accessibility Adjustments

Generated div controls became buttons/links, `data-alt` became real alt text, filters are fieldsets, breadcrumb and pagination are labeled, gallery selection uses `aria-pressed`, mobile controls expose `aria-expanded`, focus is visible, and reduced motion is honored. Body text and primary button pairings use higher-contrast token choices.

## Known Implementation Differences

- The listing and homepage screens were supplied; detail pages and open/empty interaction states remain inferred from their shared tokens and components.
- Local SVG line icons replace the generated Material Symbols webfont.
- Product images supplied by Stitch are 512×279; listing/detail frames crop them to Stitch ratios rather than inventing packaging art.
- The screenshot’s newsletter and unknown social links were omitted because no destination or consent flow was supplied.
- “24-hour expert advice” and medical-risk copy from generated HTML were removed as unverified claims.
- The implementation uses `#fcf8fb`/front-matter tokens where prose values conflict.
- Canonical domain and LINE OA are explicit non-production placeholders.
- Homepage product names and imagery from the generated Stitch HTML are retained as explicitly labeled demo catalog records; no missing prices were invented.
- Unverified homepage claims about expertise, authenticity, health outcomes, and delivery speed were replaced with neutral catalog and contact copy while preserving layout.
