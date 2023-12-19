import { db } from "@/db"
import { company } from "@/db/schema"
import type { Company } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function getCompany(
  id: Company["id"]
): Promise<Company | undefined> {
  invariant(id, `Missing "id" argument`)

  const data = await db.query.company.findFirst({
    where: eq(company.id, id),
  })

  return data
}

export async function getManyCompanies(options = {}): Promise<Company[]> {
  const data = await db.query.company.findMany({ ...options })

  return data
}
