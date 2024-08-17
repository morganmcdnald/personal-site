import { defineCollection, z } from "astro:content";
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        featuredImg: z.string(),
        tags: z.array(z.string()),
        tech: z.string(),
        priority: z.number(),
        featured: z.boolean(),
        yearBuilt: z.number(),
        designedBy: z.string(),
        designedByURL: z.string().url().optional(),
        developer1: z.string(),
        developer1URL: z.string().url().optional(),
        developer2: z.string().optional(),
        developer2URL: z.string().url().optional(),
        siteURL: z.string().url(),
    })
});

export const collections = {
    projects: projectsCollection,
};