# Deployment

Cloudflare Pages at `https://ai-web-mastery-1-cat-shop.pages.dev` is the configured production site. The owner-supplied LINE OA is `@781nazgq`; confirm it remains active before deployment. Also confirm business identity/privacy terms, validate product facts/prices, run checks/build, and crawl the static output for broken links. Build output is `dist/`. Keystatic is mounted only by the development server, so the deployed static site has no editor or CMS API routes.

A future remotely accessible Keystatic editor would be a separate deployment decision: it requires a supported Astro server adapter, GitHub storage/authentication, host configuration, and a security review. Deployment requires explicit user authorization; this implementation does not deploy.
