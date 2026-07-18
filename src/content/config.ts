import { defineCollection, z } from 'astro:content';

const imagePath = z.string().startsWith('/images/');

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: imagePath,
    alt: z.string(),
    publishedDate: z.coerce.date(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    category: z.enum(['อาหารแมว', 'ทรายแมว', 'ขนมแมว', 'อุปกรณ์แมว']),
    description: z.string(),
    price: z.string(),
    oldPrice: z.string().optional(),
    image: imagePath,
    alt: z.string(),
    badge: z.enum(['none', 'HOT', 'NEW']).default('none'),
    home: z.boolean().default(false),
    code: z.string(),
    sortOrder: z.number().int().nonnegative().default(100),
  }),
});

export const collections = { blog, products };
