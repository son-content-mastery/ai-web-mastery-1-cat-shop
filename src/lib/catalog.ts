import { getCollection, type CollectionEntry } from 'astro:content';

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: 'อาหารแมว' | 'ทรายแมว' | 'ขนมแมว' | 'อุปกรณ์แมว';
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
  alt: string;
  badge?: 'HOT' | 'NEW';
  home?: true;
  code: string;
  sortOrder: number;
  entry: CollectionEntry<'products'>;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  publishedDate: Date;
  date: string;
  entry: CollectionEntry<'blog'>;
};

const thaiDate = new Intl.DateTimeFormat('th-TH', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'Asia/Bangkok',
});

export const getProducts = async (): Promise<Product[]> => {
  const entries = await getCollection('products');

  return entries
    .map((entry) => ({
      slug: entry.slug,
      name: entry.data.name,
      brand: entry.data.brand,
      category: entry.data.category,
      description: entry.data.description,
      price: entry.data.price,
      oldPrice: entry.data.oldPrice || undefined,
      image: entry.data.image,
      alt: entry.data.alt,
      badge: entry.data.badge === 'none' ? undefined : entry.data.badge,
      home: entry.data.home ? (true as const) : undefined,
      code: entry.data.code,
      sortOrder: entry.data.sortOrder,
      entry,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name, 'th'));
};

export const getArticles = async (): Promise<Article[]> => {
  const entries = await getCollection('blog');

  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      excerpt: entry.data.excerpt,
      image: entry.data.image,
      alt: entry.data.alt,
      publishedDate: entry.data.publishedDate,
      date: thaiDate.format(entry.data.publishedDate),
      entry,
    }))
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
};
