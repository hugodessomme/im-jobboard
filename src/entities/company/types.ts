import type { Prisma } from "@prisma/client"

export const companySelect = {
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
} satisfies Prisma.CompanySelect

export interface Company
  extends Prisma.CompanyGetPayload<{ select: typeof companySelect }> {}
