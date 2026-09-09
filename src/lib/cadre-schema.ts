import { z } from "zod";

export const cadreLangSchema = z.object({
  fr: z.string().min(1),
  en: z.string().min(1),
});

export const cadreSourceSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  publisher: z.string().min(1).optional(),
  publishedAt: z.string().optional(),
  excerpt: z.string().optional(),
});

export const cadreIntentSchema = z.enum([
  "discover",
  "use_case",
  "has_agents",
  "strategy",
  "training",
]);

export const cadreStatusSchema = z.enum([
  "draft",
  "review",
  "published",
  "blocked",
]);

export const cadrePostSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be kebab-case"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updatedAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  status: cadreStatusSchema.default("published"),
  author: z.string().min(1).default("Tannous Mekari"),
  intent: cadreIntentSchema,
  readingMinutes: z.number().int().min(1).max(30),
  title: cadreLangSchema,
  insight: cadreLangSchema,
  verdict: cadreLangSchema,
  body: z.object({
    fr: z.array(z.string().min(1)).min(3).max(8),
    en: z.array(z.string().min(1)).min(3).max(8),
  }),
  sources: z.array(cadreSourceSchema).default([]),
  reviewNotes: z
    .object({
      whyNow: z.object({ fr: z.string(), en: z.string() }).optional(),
      triggers: z.array(z.string()).optional(),
      sensitivePassages: z.array(z.string()).optional(),
    })
    .optional(),
});

export type CadrePost = z.infer<typeof cadrePostSchema>;
export type CadreSource = z.infer<typeof cadreSourceSchema>;
export type CadreStatus = z.infer<typeof cadreStatusSchema>;

export function parseCadrePost(data: unknown): CadrePost {
  return cadrePostSchema.parse(data);
}

export function safeParseCadrePost(data: unknown) {
  return cadrePostSchema.safeParse(data);
}
