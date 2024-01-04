"use server"

import { db } from "@/lib/db"

export async function createLevel(values) {
  const data = await db.level.create({
    data: values,
  })

  return data
}

export async function createManyLevels(values) {
  const data = await db.level.createMany({
    data: values,
  })

  return data
}

export async function deleteLevel(id: string) {
  const data = await db.level.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyLevels() {
  const data = await db.level.deleteMany({})

  return data
}
