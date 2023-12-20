import { relations } from "drizzle-orm"
import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { nanoid } from "nanoid"

export const contract = pgTable("contract", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: varchar("label", { length: 256 }).notNull().unique(),
})

export type ContractSelect = typeof contract.$inferSelect
export type ContractInsert = typeof contract.$inferInsert

export const company = pgTable("company", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: varchar("label", { length: 256 }).notNull(),
  description: text("description"),
  city: varchar("city", { length: 256 }).notNull(),
  country: varchar("country", { length: 256 }).notNull(),
  imageUrl: varchar("image_url").notNull(),
})

export const companyRelations = relations(company, ({ many }) => ({
  jobs: many(job),
}))

export type CompanySelect = typeof company.$inferSelect
export type CompanyInsert = typeof company.$inferInsert

export const job = pgTable("job", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: varchar("label", { length: 256 }).notNull(),
  description: text("description").notNull(),
  salaryMin: integer("salary_min").notNull(),
  salaryMax: integer("salary_max").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
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
