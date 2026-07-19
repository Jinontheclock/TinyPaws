import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cats = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/cats" }),
  // image() resolves photo paths through astro:assets at build time
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      age: z.string(),
      sex: z.enum(["Male", "Female"]),
      breed: z.string(),
      location: z.string(),
      daysInFoster: z.number(),
      temperament: z.array(z.string()),
      story: z.array(z.string()),
      medical: z.object({
        vaccinated: z.boolean(),
        spayed_neutered: z.boolean(),
        notes: z.string(),
      }),
      status: z.enum(["available", "pending", "adopted"]),
      coat: z.string(),
      accent: z.string(),
      quiz: z.object({
        energy: z.enum(["low", "medium", "high"]),
        social: z.enum(["independent", "balanced", "velcro"]),
        home: z.enum(["quiet", "any", "busy"]),
        experience: z.enum(["first-timer", "any"]),
      }),
      // real photos are optional — cats without them keep the illustrated
      // portrait (a new rescue may simply not have photos yet)
      photos: z.array(image()).optional(),
      photoAlt: z.string().optional(),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    place: z.string(),
    blurb: z.string(),
    kind: z.enum(["adoption", "fundraiser", "community"]),
  }),
});

export const collections = { cats, events };
