"use server"

import { db } from "@/lib/db"

export async function createContract(values) {
  const data = await db.contract.create({
    data: values,
  })

  return data
}

export async function createManyContracts(values) {
  const data = await db.contract.createMany({
    data: values,
  })

  return data
}

export async function deleteContract(id: string) {
  const data = await db.contract.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyContracts() {
  const data = await db.contract.deleteMany({})

  return data
}
