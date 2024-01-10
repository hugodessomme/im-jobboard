import { db } from "@/lib/db"

export async function getCategory(id: string) {
  const data = await db.category.findUnique({
    where: {
      id,
    },
  })

  return data
}

export async function getAllCategories(options = {}) {
  const data = await db.category.findMany({
    include: {
      _count: {
        select: {
          job: true,
        },
      },
    },
    ...options,
  })

  return data
}
