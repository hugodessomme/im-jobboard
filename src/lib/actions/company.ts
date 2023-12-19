"use server"

import { db } from "@/db"
import { company } from "@/db/schema"
import type { Company, CompanyCreate } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function createCompany(values: CompanyCreate) {
  const data = await db.insert(company).values(values).returning()
  return data
}

export async function createManyCompanies(values: CompanyCreate[]) {
  const data = await db.insert(company).values(values).returning()
  return data
}

export async function deleteCompany(id: Company["id"]) {
  invariant(id, `Missing "id" argument`)

  const data = await db.delete(company).where(eq(company.id, id)).returning()
  return data
}

export async function deleteManyCompanies() {
  const data = await db.delete(company).returning()

  return data
}
