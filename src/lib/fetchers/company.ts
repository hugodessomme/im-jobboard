import { db } from "@/lib/db"

export async function getCompany(id: string) {
  const data = await db.company.findUnique({
    where: {
      id,
    },
  })

  return data
}

export async function getManyCompanies(options = {}) {
  const data = await db.company.findMany({ ...options })

  return data
}
