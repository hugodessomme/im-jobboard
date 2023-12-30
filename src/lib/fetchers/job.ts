import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getJob(id: string) {
  const data = await db.job.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      label: true,
      description: true,
      salaryMin: true,
      salaryMax: true,
      createdAt: true,
      category: {
        select: {
          id: true,
          label: true,
        },
      },
      company: {
        select: {
          id: true,
          label: true,
          imageUrl: true,
          city: true,
          country: true,
        },
      },
      contract: {
        select: {
          id: true,
          label: true,
        },
      },
    },
  })

  return data
}

export async function getManyJobs(options = {}) {
  noStore()

  const data = await db.job.findMany({
    select: {
      id: true,
      label: true,
      salaryMin: true,
      salaryMax: true,
      category: {
        select: {
          id: true,
          label: true,
        },
      },
      company: {
        select: {
          id: true,
          label: true,
          imageUrl: true,
          city: true,
          country: true,
        },
      },
      contract: {
        select: {
          id: true,
          label: true,
        },
      },
    },
    ...options,
  })

  return data
}

export async function getManyJobsPagination(options = {}) {
  noStore()

  const data = await db.$transaction([
    db.job.findMany({
      select: {
        id: true,
        label: true,
        salaryMin: true,
        salaryMax: true,
        category: {
          select: {
            id: true,
            label: true,
          },
        },
        company: {
          select: {
            label: true,
            imageUrl: true,
            city: true,
            country: true,
          },
        },
        contract: {
          select: {
            label: true,
          },
        },
      },
      ...options,
    }),
    db.job.count(),
  ])

  return data
}
