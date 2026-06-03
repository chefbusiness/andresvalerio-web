import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Recetas del Chef Andrés Valerio. Datos estructurados en frontmatter
 *  (para la ficha técnica + Recipe JSON-LD) y secciones editoriales en el cuerpo. */
const recetas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recetas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    category: z.string().default('Salsas'),
    cuisine: z.string().optional(),
    difficulty: z.enum(['Baja', 'Media', 'Alta']).default('Baja'),
    prepMinutes: z.number(),
    cookMinutes: z.number(),
    servings: z.number(),
    yieldText: z.string().optional(),
    calories: z.number().optional(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    tips: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** Blog del Chef Andrés Valerio. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    category: z.string().default('Gastronomía'),
    author: z.string().default('Andrés Valerio'),
    readingMinutes: z.number().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { recetas, blog };
