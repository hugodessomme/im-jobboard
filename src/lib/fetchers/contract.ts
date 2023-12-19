import { db } from "@/db"
import { contract } from "@/db/schema"
import type { Contract } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function getContract(
  id: Contract["id"]
): Promise<Contract | undefined> {
  invariant(id, `Missing "id" argument`)

  const data = await db.query.contract.findFirst({
    where: eq(contract.id, id),
  })

  return data
}

export async function getManyContracts() {
  const data = await db.query.contract.findMany()

  return data
}
