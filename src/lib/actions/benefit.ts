"use server"

import { db } from "@/lib/db"

export async function createBenefit(values) {
  const data = await db.benefit.create({
    data: values,
  })

  return data
}

export async function createManyBenefits(values) {
  const data = await db.benefit.createMany({
    data: values,
  })

  return data
}

export async function deleteBenefit(id: string) {
  const data = await db.benefit.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyBenefits() {
  const data = await db.benefit.deleteMany({})

  return data
}
