"use server"

import { db } from "@/lib/db"

export async function createJob(values) {
  const data = await db.job.create({
    data: values,
  })

  return data
}

export async function createManyJobs(values) {
  const data = await db.job.createMany({
    data: values,
  })

  return data
}

export async function deleteJob(id: string) {
  const data = await db.job.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyJobs() {
  const data = await db.job.deleteMany({})

  return data
}
