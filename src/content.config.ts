import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kartsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/karts' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['entry', 'sport', 'pro', 'custom']),
    tagline: z.string(),
    price: z.number().optional(),
    specs: z.object({
      motorType: z.string(),
      power: z.string(),
      torque: z.string(),
      topSpeed: z.string(),
      weight: z.string(),
      driftAngle: z.string(),
      chassis: z.string(),
    }),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    available: z.boolean().default(true),
  }),
});

export const collections = { karts: kartsCollection };
