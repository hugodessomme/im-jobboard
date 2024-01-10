import { z } from "zod"

export const companySearchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().optional().default("18"),
  city: z.string().optional(),
  country: z.string().optional(),
})
