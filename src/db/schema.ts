import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const contract = sqliteTable("contract", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: text("label").notNull().unique(),
})

export type ContractSelect = typeof contract.$inferSelect
export type ContractInsert = typeof contract.$inferInsert

export const company = sqliteTable("company", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: text("label").notNull(),
  description: text("description"),
  city: text("city").notNull(),
  country: text("country").notNull(),
  imageUrl: text("image_url").notNull(),
})

export const companyRelations = relations(company, ({ many }) => ({
  jobs: many(job),
}))

export type CompanySelect = typeof company.$inferSelect
export type CompanyInsert = typeof company.$inferInsert

export const job = sqliteTable("job", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: text("label").notNull(),
  description: text("description").notNull(),
  salaryMin: integer("salary_min").notNull(),
  salaryMax: integer("salary_max").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  companyId: text("company_id")
    .references(() => company.id, { onDelete: "cascade" })
    .notNull(),
  contractId: text("contract_id")
    .references(() => contract.id)
    .notNull(),
})

export const jobRelations = relations(job, ({ one }) => ({
  company: one(company, {
    fields: [job.companyId],
    references: [company.id],
  }),
  contract: one(contract, {
    fields: [job.contractId],
    references: [contract.id],
  }),
}))

export type JobSelect = typeof job.$inferSelect
export type JobInsert = typeof job.$inferInsert
