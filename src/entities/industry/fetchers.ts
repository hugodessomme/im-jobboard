import { db } from "@/lib/db"

export async function getIndustry(id: string) {
  const data = await db.industry.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      label: true,
    },
  })

  return data
}

export async function getAllIndustries(options = {}) {
  const data = await db.industry.findMany({
    select: {
      id: true,
      label: true,
    },
    ...options,
  })

  return data
}
