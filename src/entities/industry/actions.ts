"use server"

import { db } from "@/lib/db"

export async function createIndustry(values) {
  const data = await db.industry.create({
    data: values,
  })

  return data
}

export async function createManyIndustries(values) {
  const data = await db.industry.createMany({
    data: values,
  })

  return data
}

export async function deleteIndustry(id: string) {
  const data = await db.industry.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyIndustries() {
  const data = await db.industry.deleteMany({})

  return data
}
