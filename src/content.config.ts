import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projects,
};
