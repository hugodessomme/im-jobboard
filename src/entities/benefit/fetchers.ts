import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getBenefit(id: string) {
  const data = await db.benefit.findUnique({
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

export async function getAllBenefits(options = {}) {
  noStore()

  const data = await db.benefit.findMany({
    select: {
      id: true,
      label: true,
    },
    ...options,
  })

  return data
}
