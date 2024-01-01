import { db } from "@/lib/db"

export async function getCompany(id: string) {
  const data = await db.company.findUnique({
    where: {
      id,
    },
  })

  return data
}

export async function getManyCompanies(options = {}) {
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

export async function getManyCompaniesPagination(options = {}) {
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
