import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getLevel(id: string) {
  const data = await db.level.findUnique({
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

export async function getAllLevels(options = {}) {
  noStore()

  const data = await db.level.findMany({
    select: {
      id: true,
      label: true,
    },
    ...options,
  })

  return data
}
