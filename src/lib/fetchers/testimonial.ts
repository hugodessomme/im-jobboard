import { unstable_noStore as noStore } from "next/cache"

import { db } from "@/lib/db"

export async function getTestimonial(id: string) {
  const data = await db.testimonial.findUnique({
    where: {
      id,
    },
  })

  return data
}

export async function getManyTestimonials(options = {}) {
  noStore()

  const data = await db.testimonial.findMany({ ...options })

  return data
}
