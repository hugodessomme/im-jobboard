import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getTag(id: string) {
  const data = await db.tag.findUnique({
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

export async function getAllTags(options = {}) {
  noStore()

  const data = await db.tag.findMany({
    select: {
      id: true,
      label: true,
    },
    ...options,
  })

  return data
}
