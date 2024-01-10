import { z } from "zod"

export const jobFormSchema = z.object({
  search: z.string().min(1, { message: "Please enter some text" }),
})

// TODO: keep it here or ./types.ts?
export type JobFormValues = z.infer<typeof jobFormSchema>

export const jobSearchParamsSchema = z.object({
  per_page: z.string().optional().default("15"),
  page: z.string().default("1"),
  industry: z.string().optional(),
  contract: z.string().optional(),
  salary: z.string().optional(),
  remote: z.string().optional().default("false"),
})
