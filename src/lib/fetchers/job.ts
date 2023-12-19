import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/db"
import { job } from "@/db/schema"
import type { Job, JobWithCompanyWithContract } from "@/types"
import { eq } from "drizzle-orm"
import invariant from "tiny-invariant"

export async function getJob(id: Job["id"]): Promise<Job | undefined> {
  invariant(id, `Missing "id" argument`)

  const data = await db.query.job.findFirst({
    where: eq(job.id, id),
  })

  return data
}

export async function getManyJobs(
  config = {}
): Promise<JobWithCompanyWithContract[]> {
  noStore()

  const data = await db.query.job.findMany({
    with: {
      company: true,
      contract: true,
    },
    ...config,
  })

  return data
}
