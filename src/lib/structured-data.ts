import type { Product } from './catalog';
import { site } from '../config/site';

type JsonLd = Record<string, unknown>;

const absoluteUrl = (pathname: string) => new URL(pathname, site.canonicalBase).toString();

export const breadcrumbSchema = (items: Array<{ name: string; pathname?: string }>): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.pathname ? { item: absoluteUrl(item.pathname) } : {}),
  })),
});

export const categoryPageSchema = (
  category: { slug: string; name: string; description: string },
  products: Product[],
): JsonLd => {
  const pathname = `/categories/${category.slug}/`;
  const pageUrl = absoluteUrl(pathname);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${category.name} | ${site.name}`,
        description: category.description,
        inLanguage: 'th-TH',
        mainEntity: { '@id': `${pageUrl}#itemlist` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        name: `รายการ${category.name}`,
        numberOfItems: products.length,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: absoluteUrl(`/products/${product.slug}/`),
        })),
      },
      breadcrumbSchema([
        { name: 'หน้าแรก', pathname: '/' },
        { name: 'สินค้าทั้งหมด', pathname: '/products/' },
        { name: category.name },
      ]),
    ],
  };
};

const numericPrice = (displayPrice: string) => {
  const normalized = displayPrice.replace(/[^0-9.]/g, '');
  return normalized && Number.isFinite(Number(normalized)) ? Number(normalized).toFixed(2) : undefined;
};

export const productPageSchema = (product: Product): JsonLd => {
  const pathname = `/products/${product.slug}/`;
  const productUrl = absoluteUrl(pathname);
  const price = numericPrice(product.price);
  const productNode: JsonLd = {
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    url: productUrl,
    name: product.name,
    description: product.description,
    image: [absoluteUrl(product.image)],
    sku: product.code,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
  };

  if (price) {
    productNode.offers = {
      '@type': 'Offer',
      url: productUrl,
      price,
      priceCurrency: 'THB',
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      productNode,
      breadcrumbSchema([
        { name: 'หน้าแรก', pathname: '/' },
        { name: 'สินค้าทั้งหมด', pathname: '/products/' },
        { name: product.name },
      ]),
    ],
  };
};
