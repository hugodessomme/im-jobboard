"use server"

import { db } from "@/lib/db"

export async function createCategory(values) {
  const data = await db.category.create({
    data: values,
  })

  return data
}

export async function createManyCategories(values) {
  const data = await db.category.createMany({
    data: values,
  })

  return data
}

export async function deleteCategory(id: string) {
  const data = await db.category.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyCategories() {
  const data = await db.category.deleteMany({})

  return data
}
