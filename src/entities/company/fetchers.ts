import { db } from "@/lib/db"

import { companySelect } from "./types"

export async function getCompany(id: string) {
  const data = await db.company.findUnique({
    where: {
      id,
    },
    select: companySelect,
  })

  return data
}

export async function getAllCompanies(options = {}) {
  const data = await db.company.findMany({
    include: {
      _count: {
        select: {
          job: true,
        },
      },
    },
    ...options,
  })

  return data
}

export async function getAllCompaniesPagination(options = {}) {
  const data = await db.$transaction([
    db.company.findMany({
      select: {
        id: true,
        label: true,
        city: true,
        country: true,
        imageUrl: true,
        _count: {
          select: {
            job: true,
          },
        },
      },
      ...options,
    }),
    db.company.count(),
  ])

  return data
}
