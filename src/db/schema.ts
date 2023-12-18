import { relations, sql } from "drizzle-orm"
import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { nanoid } from "nanoid"

export const job = sqliteTable("job", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: text("label").notNull(),
  description: text("description").notNull(),
  salaryMin: integer("salary_min").notNull(),
  salaryMax: integer("salary_max").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  companyId: text("company_id")
    .notNull()
    .references(() => company.id, { onDelete: "cascade" }),
})

export const jobRelations = relations(job, ({ one, many }) => ({
  company: one(company, {
    fields: [job.companyId],
    references: [company.id],
  }),
  jobContract: many(jobContract),
}))

export type JobSelect = typeof job.$inferSelect
export type JobInsert = typeof job.$inferInsert

export const contract = sqliteTable("contract", {
  id: text("id").primaryKey().$defaultFn(nanoid),
  label: text("label").notNull().unique(),
})

export const contractRelations = relations(contract, ({ many }) => ({
  jobContract: many(jobContract),
}))

export type ContractSelect = typeof contract.$inferSelect
export type ContractInsert = typeof contract.$inferInsert

export const jobContract = sqliteTable(
  "job_contract",
  {
    jobId: text("job_id")
      .references(() => job.id)
      .notNull(),
    contractId: text("contract_id")
      .references(() => contract.id)
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.jobId, table.contractId] }),
  })
)

export const jobContractRelations = relations(jobContract, ({ one }) => ({
  job: one(job, {
    fields: [jobContract.jobId],
    references: [job.id],
  }),
  contract: one(contract, {
    fields: [jobContract.contractId],
    references: [contract.id],
  }),
}))

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
