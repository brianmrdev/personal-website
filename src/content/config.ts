import { defineCollection, z } from "astro:content";

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    number: z.number(),
  }),
});

const projects = defineCollection({
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
  }),
});

export const collections = {
  services: services,
  projects: projects,
};
