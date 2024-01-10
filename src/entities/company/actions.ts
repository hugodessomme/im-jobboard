"use server"

import { db } from "@/lib/db"

export async function createCompany(values) {
  const data = await db.company.create({
    data: values,
  })

  return data
}

export async function createManyCompanies(values) {
  const data = await db.company.createMany({
    data: values,
  })

  return data
}

export async function deleteCompany(id: string) {
  const data = await db.company.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyCompanies() {
  const data = await db.company.deleteMany({})

  return data
}
