import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const step = z.object({ name: z.string(), text: z.string() });
const qa = z.object({ q: z.string(), a: z.string() });

// Answer pages: one Markdown file per question people search for.
// The folder is the site section: src/content/pages/apps/gimp.md -> /apps/gimp/
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(170),
    apps: z.array(z.string()).min(1),
    answer: z.string(),
    steps: z.array(step).default([]),
    requirements: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    freeInUserland: z.string().optional(),
    faq: z.array(qa).default([]),
    related: z.array(z.string()).default([]),
    order: z.number().default(100),
    hub: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/legal' }),
  schema: z.object({ path: z.string(), title: z.string() }),
});

export const collections = { pages, legal };
