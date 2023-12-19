"use server"

import { db } from "@/db"
import { job } from "@/db/schema"
import type { Job, JobCreate } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function createJob(values: JobCreate) {
  const data = await db.insert(job).values(values).returning()
  return data
}

export async function createManyJobs(values: JobCreate[]) {
  const data = await db.insert(job).values(values).returning()
  return data
}

export async function deleteJob(id: Job["id"]) {
  invariant(id, `Missing "id" argument`)

  const data = await db.delete(job).where(eq(job.id, id)).returning()
  return data
}

export async function deleteManyJobs() {
  const data = await db.delete(job).returning()

  return data
}
