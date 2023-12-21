import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getJob(id: string) {
  const data = await db.job.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
      contract: true,
    },
  })

  return data
}

export async function getManyJobs(options = {}) {
  noStore()

  const data = await db.job.findMany({
    include: {
      company: true,
      contract: true,
    },
    ...options,
  })

  return data
}

export async function getManyJobsPagination(options = {}) {
  noStore()

  const data = await db.$transaction([
    db.job.findMany({
      include: {
        company: true,
        contract: true,
      },
      ...options,
    }),
    db.job.count(),
  ])

  return data
}
