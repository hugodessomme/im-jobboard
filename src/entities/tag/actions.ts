"use server"

import { db } from "@/lib/db"

export async function createTag(values) {
  const data = await db.tag.create({
    data: values,
  })

  return data
}

export async function createManyTags(values) {
  const data = await db.tag.createMany({
    data: values,
  })

  return data
}

export async function deleteTag(id: string) {
  const data = await db.tag.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyTags() {
  const data = await db.tag.deleteMany({})

  return data
}
