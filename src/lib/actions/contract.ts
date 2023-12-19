"use server"

import { db } from "@/db"
import { contract } from "@/db/schema"
import type { Contract, ContractCreate } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function createContract(values: ContractCreate) {
  const data = await db.insert(contract).values(values).returning()

  return data
}

export async function createManyContracts(values: ContractCreate[]) {
  const data = await db.insert(contract).values(values).returning()

  return data
}

export async function deleteContract(id: Contract["id"]) {
  invariant(id, `Missing "id" argument`)

  const data = await db.delete(contract).where(eq(contract.id, id)).returning()

  return data
}

export async function deleteManyContracts() {
  const data = await db.delete(contract).returning()

  return data
}
