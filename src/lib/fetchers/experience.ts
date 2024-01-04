import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getExperience(id: string) {
  const data = await db.experience.findUnique({
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

export async function getAllExperiences(options = {}) {
  noStore()

  const data = await db.experience.findMany({
    select: {
      id: true,
      label: true,
    },
    ...options,
  })

  return data
}
