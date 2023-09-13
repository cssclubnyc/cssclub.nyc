import { defineCollection, z } from "astro:content";

const eventsCollection = defineCollection({
  type: "data",
  schema: z.object({
    datetime: z.string(),
    url: z.string().nullable(),
    soldOut: z.boolean(),
    lineup: z.array(
      // TODO: Move this to another collection and use reference()
      z
        .object({
          time: z.string(),
          title: z.string(),
          excerpt: z.string().optional(),
          desc: z.string().optional(),
        })
        .optional(),
    ),
  }),
});

export const collections = {
  events: eventsCollection,
};
