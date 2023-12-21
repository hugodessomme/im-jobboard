import { z } from "zod"

export const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().optional().default("15"),
})

export const jobSearchParamsSchema = searchParamsSchema.extend({
  industry: z.string().optional(),
  contract: z.string().optional(),
  salary: z.string().optional(),
  remote: z.string().optional().default("false"),
})
