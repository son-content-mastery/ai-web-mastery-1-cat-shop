# QA checklist

- Build and Astro check pass; `git diff --check` is clean.
- Review 375, 768, 1024, and reference desktop widths for overflow and wrapping.
- Check header/menu, filters/empty state, every product-card link, gallery controls, copy code, LINE CTA, breadcrumbs, related links, footer, and 404.
- Confirm one H1/page, unique metadata, alt text, focus visibility, reduced motion, and keyboard order.
- Parse JSON-LD on category and product outputs; confirm schema URLs match canonical URLs, visible prices match `Offer`, and no availability/review data is inferred. Validate representative live URLs in Google's Rich Results Test after the production domain is configured.
- Search for `href="#"`, cart/checkout/account language, remote Stitch URLs, hardcoded LINE destinations, fake reviews/ratings/stock, duplicate H1, and broken internal/docs links.
- Confirm reference ZIP/CSV checksums remain unchanged and placeholders are reported.
