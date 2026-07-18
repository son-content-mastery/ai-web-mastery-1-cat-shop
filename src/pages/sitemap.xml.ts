import type { APIRoute } from 'astro';

import { site } from '../config/site';
import { getArticles, getProducts } from '../lib/catalog';

const fixedPaths = [
  '/',
  '/about/',
  '/blog/',
  '/brands/maxima/',
  '/brands/royal-canin/',
  '/categories/cat-food/',
  '/categories/cat-litter/',
  '/contact/',
  '/privacy/',
  '/products/',
  '/purchasing/',
] as const;

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };

    return entities[character];
  });

export const GET: APIRoute = async () => {
  const [articles, products] = await Promise.all([getArticles(), getProducts()]);
  const paths = [
    ...fixedPaths,
    ...articles.map((article) => `/blog/${article.slug}/`),
    ...products.map((product) => `/products/${product.slug}/`),
  ];
  const urls = [...new Set(paths)]
    .map((path) => new URL(path, site.canonicalBase).toString())
    .sort((a, b) => a.localeCompare(b));
  const entries = urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n');
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
