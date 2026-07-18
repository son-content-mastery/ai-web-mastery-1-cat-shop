import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

const isDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://example.invalid',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    ...(isDevelopment ? [react(), markdoc(), keystatic()] : []),
  ],
});
