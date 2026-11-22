import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        contentStatus: z.enum(['seed', 'draft', 'review', 'ready']),
        audience: z.array(z.string()).min(1),
        learningObjectives: z.array(z.string()).min(1),
        reviewEvidence: z.array(z.string().min(1)).optional(),
      }),
    }),
  }),
};
