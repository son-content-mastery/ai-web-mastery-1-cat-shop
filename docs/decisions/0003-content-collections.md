# 0003: File-based content collections

Status: Accepted

Catalog and article records are maintained as typed Markdown collections in `src/content/`, enabling pre-rendered dynamic routes without a database. Keystatic provides a local editor for these source files during development. `src/content/config.ts` validates build-time data and `src/lib/catalog.ts` exposes stable product/article view models to pages and components. The Keystatic integration is omitted from production builds so the public deployment remains fully static.
