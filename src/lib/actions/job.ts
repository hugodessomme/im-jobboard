"use server"

import type { JobCreate, JobCreateMany } from "@/types"

import { db } from "@/lib/db"

export async function createJob(values: JobCreate) {
  const data = await db.job.create({
    data: values,
  })

  return data
}

export async function createManyJobs(values: JobCreateMany[]) {
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
