"use server"

import { db } from "@/lib/db"

export async function createExperience(values) {
  const data = await db.experience.create({
    data: values,
  })

  return data
}

export async function createManyExperiences(values) {
  const data = await db.experience.createMany({
    data: values,
  })

  return data
}

export async function deleteExperience(id: string) {
  const data = await db.experience.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyExperiences() {
  const data = await db.experience.deleteMany({})

  return data
}
