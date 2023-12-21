"use server"

import { db } from "@/lib/db"

export async function createTestimonial(values) {
  const data = await db.testimonial.create({
    data: values,
  })

  return data
}

export async function createManyTestimonials(values) {
  const data = await db.testimonial.createMany({
    data: values,
  })

  return data
}

export async function deleteTestimonial(id: string) {
  const data = await db.testimonial.delete({
    where: {
      id,
    },
  })

  return data
}

export async function deleteManyTestimonials() {
  const data = await db.testimonial.deleteMany({})

  return data
}
