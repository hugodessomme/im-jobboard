import { db } from "@/lib/db"

export async function getCompany(id: string) {
  const data = await db.company.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      label: true,
      city: true,
      country: true,
      imageUrl: true,
      coverImageUrl: true,
      phone: true,
      email: true,
      companyUrl: true,
      facebookUrl: true,
      twitterUrl: true,
      instagramUrl: true,
      youtubeUrl: true,
      industry: {
        select: {
          label: true,
        },
      },
    },
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
