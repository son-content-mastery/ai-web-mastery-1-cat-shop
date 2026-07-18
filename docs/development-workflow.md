# Development workflow

Use Node/npm. Install with `npm install`, start with `npm run dev`, type-check with `npm run check`, build with `npm run build`, and inspect production output with `npm run preview`. During development, open `http://127.0.0.1:4321/keystatic/` to create or edit blog posts and products. Keystatic writes Markdown and uploaded images directly into the repository; review and version those source changes like any other content change. The editor is intentionally local-only and is not present in the static production build.

Read `AGENTS.md` and root `DESIGN.md` before UI work. Never edit `references/`, `node_modules/`, `dist/`, or `.astro/`. Keep the verified LINE destination and domain placeholder centralized, use scoped changes, and synchronize docs after route, component, or design-state changes.
