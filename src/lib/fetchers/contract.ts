import { db } from "@/lib/db"

export async function getContract(id: string) {
  const data = await db.contract.findUnique({
    where: {
      id,
    },
  })

  return data
}

export async function getAllContracts() {
  const data = await db.contract.findMany({})

  return data
}
