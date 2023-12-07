import { z } from "zod"

export const jobFormSchema = z.object({
  search: z.string().min(1, { message: "Please enter some text" }),
})

export type JobFormValues = z.infer<typeof jobFormSchema>
