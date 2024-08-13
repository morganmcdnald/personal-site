import { defineCollection, z } from "astro:content";
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        featuredImg: z.string(),
        tags: z.array(z.string()),
        priority: z.number(),
        featured: z.boolean(),
    })
});

export const collections = {
    projects: projectsCollection,
};