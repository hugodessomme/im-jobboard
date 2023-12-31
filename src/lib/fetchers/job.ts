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
      expiredAt: true,
      benefits: {
        select: {
          id: true,
          label: true,
        },
      },
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
      experience: {
        select: {
          label: true,
        },
      },
      level: {
        select: {
          label: true,
        },
      },
      tags: {
        select: {
          id: true,
          label: true,
        },
      },
    },
  })

  return data
}

export async function getAllJobs(options = {}) {
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

export async function getAllJobsWithCount(options = {}) {
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

export async function getAllJobsByCompany(id: string, options = {}) {
  noStore()

  const data = await db.job.findMany({
    where: {
      company: {
        id,
      },
    },
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
  })

  return data
}

export async function getAllJobsByCompanyWithCount(id: string, options = {}) {
  noStore()

  const data = await db.$transaction([
    db.job.findMany({
      where: {
        company: {
          id,
        },
      },
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
    db.job.count({
      where: {
        company: {
          id,
        },
      },
    }),
  ])

  return data
}
