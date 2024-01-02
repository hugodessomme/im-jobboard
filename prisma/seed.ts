import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import {
  createManyCategories,
  deleteManyCategories,
} from "@/lib/actions/category"
import { createManyCompanies, deleteManyCompanies } from "@/lib/actions/company"
import {
  createManyContracts,
  deleteManyContracts,
} from "@/lib/actions/contract"
import {
  createManyIndustries,
  deleteManyIndustries,
} from "@/lib/actions/industry"
import { createManyJobs, deleteManyJobs } from "@/lib/actions/job"
import { createManyTestimonials } from "@/lib/actions/testimonial"
import { getAllCategories } from "@/lib/fetchers/category"
import { getAllCompanies } from "@/lib/fetchers/company"
import { getAllContracts } from "@/lib/fetchers/contract"
import { getAllIndustries } from "@/lib/fetchers/industry"
import { generateSlug } from "@/lib/utils"

const db = new PrismaClient()

async function main() {
  console.log("Seeding...")
  console.time("Finished in")

  // Reset
  await deleteManyCompanies()
  await deleteManyContracts()
  await deleteManyCategories()
  await deleteManyIndustries()
  await deleteManyJobs()
  console.log("✅ reset")

  // Industries
  const industriesData = Array.from({ length: 10 }).map(() => ({
    label: faker.person.jobArea(),
  }))
  await createManyIndustries(industriesData)
  const industries = await getAllIndustries()
  console.log("✅ industries")

  // Companies
  const companiesData = Array.from({ length: 30 }).map(() => {
    const industryId =
      industries[faker.number.int({ min: 0, max: industries.length - 1 })]!.id

    return {
      label: faker.company.name(),
      city: faker.location.city(),
      country: faker.location.country(),
      imageUrl: faker.image.urlLoremFlickr({
        category: "alphabet",
        width: 56,
        height: 56,
      }),
      coverImageUrl: faker.image.urlLoremFlickr({
        category: "building",
        width: 1400,
        height: 232,
      }),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      companyUrl: faker.internet.url(),
      facebookUrl: faker.internet.url(),
      twitterUrl: faker.internet.url(),
      instagramUrl: faker.internet.url(),
      youtubeUrl: faker.internet.url(),
      industryId,
    }
  })
  await createManyCompanies(companiesData)
  const companies = await getAllCompanies()
  console.log("✅ companies")

  // Contracts
  await createManyContracts([
    { label: "Contract Base" },
    { label: "Full-Time" },
    { label: "Internship" },
    { label: "Part-Time" },
    { label: "Temporary" },
  ])
  const contracts = await getAllContracts()
  console.log("✅ contracts")

  // Categories
  const categoriesLabel = Array.from({ length: 20 }).map((_) =>
    faker.person.jobArea()
  )
  const categoriesData = Array.from(new Set(categoriesLabel)).map((label) => ({
    label,
    slug: generateSlug(label),
  }))
  await createManyCategories(categoriesData)
  const categories = await getAllCategories()
  console.log("✅ categories")

  // Jobs
  const jobsData = Array.from({ length: 100 }).map((_) => {
    const companyId =
      companies[faker.number.int({ min: 0, max: companies.length - 1 })]!.id
    const contractId =
      contracts[faker.number.int({ min: 0, max: contracts.length - 1 })]!.id
    const categoryId =
      categories[faker.number.int({ min: 0, max: categories.length - 1 })]!.id

    return {
      label: faker.person.jobTitle(),
      description: faker.lorem.text(),
      salaryMin: faker.number.int({ min: 10000, max: 20000 }),
      salaryMax: faker.number.int({ min: 25000, max: 35000 }),
      companyId,
      contractId,
      categoryId,
    }
  })
  await createManyJobs(jobsData)
  console.log("✅ jobs")

  // Testimonials
  const testimonialsData = Array.from({ length: 10 }).map((_) => ({
    description: faker.lorem.paragraph(),
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    imageUrl: faker.image.urlLoremFlickr({ category: "selfie" }),
    rate: faker.number.int({ min: 3, max: 5 }),
  }))
  await createManyTestimonials(testimonialsData)
  console.log("✅ testimonials")
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
  .finally(() => console.timeEnd("Finished in"))
