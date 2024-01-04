import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import { createManyBenefits } from "@/lib/actions/benefit"
import { createManyCategories } from "@/lib/actions/category"
import { createManyCompanies } from "@/lib/actions/company"
import { createManyContracts } from "@/lib/actions/contract"
import { createManyExperiences } from "@/lib/actions/experience"
import { createManyIndustries } from "@/lib/actions/industry"
import { createManyJobs } from "@/lib/actions/job"
import { createManyLevels } from "@/lib/actions/level"
import { createManyTags } from "@/lib/actions/tag"
import { createManyTestimonials } from "@/lib/actions/testimonial"
import { getAllBenefits } from "@/lib/fetchers/benefit"
import { getAllCategories } from "@/lib/fetchers/category"
import { getAllCompanies } from "@/lib/fetchers/company"
import { getAllContracts } from "@/lib/fetchers/contract"
import { getAllExperiences } from "@/lib/fetchers/experience"
import { getAllIndustries } from "@/lib/fetchers/industry"
import { getAllJobs, getJob } from "@/lib/fetchers/job"
import { getAllLevels } from "@/lib/fetchers/level"
import { getAllTags } from "@/lib/fetchers/tag"
import { generateSlug } from "@/lib/utils"

const db = new PrismaClient()

async function main() {
  console.log("Seeding...")
  console.time("Finished in")

  // Benefits
  await createManyBenefits([
    { label: "401k Salary" },
    { label: "Distributed Team" },
    { label: "Async" },
    { label: "Vision Insurance" },
    { label: "Dental Insurance" },
    { label: "Medical Insurance" },
    { label: "Unlimited vacation" },
    { label: "4 day workweek" },
    { label: "401k matching" },
    { label: "Company retreats" },
    { label: "Learning budget" },
    { label: "Free gym membership" },
    { label: "Pay in crypto" },
    { label: "Profit Sharing" },
    { label: "Equity Compensation" },
    { label: "No whiteboard interview" },
    { label: "No politics at work" },
    { label: "We hire old (and young)" },
  ])
  const benefits = await getAllBenefits()
  console.log("✅ benefits")

  // Categories
  const categoriesLabel = Array.from({ length: 20 }).map(() =>
    faker.person.jobArea()
  )
  const categoriesData = Array.from(new Set(categoriesLabel)).map((label) => ({
    label,
    slug: generateSlug(label),
  }))
  await createManyCategories(categoriesData)
  const categories = await getAllCategories()
  console.log("✅ categories")

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

  // Experiences
  await createManyExperiences([
    { label: "0 - 2 years" },
    { label: "2 - 5 years" },
    { label: "> 5 years" },
    { label: "> 10 years" },
    { label: "> 15 years" },
  ])
  const experiences = await getAllExperiences()
  console.log("✅ experiences")

  // Industries
  const industriesData = Array.from({ length: 10 }).map(() => ({
    label: faker.person.jobArea(),
  }))
  await createManyIndustries(industriesData)
  const industries = await getAllIndustries()
  console.log("✅ industries")

  // Levels
  await createManyLevels([
    { label: "Junior" },
    { label: "Intermediate" },
    { label: "Senior" },
    { label: "Lead" },
    { label: "Manager" },
  ])
  const levels = await getAllLevels()
  console.log("✅ levels")

  // Tags
  const tagsData = Array.from({ length: 10 }).map(() => ({
    label: faker.lorem.word(),
  }))
  await createManyTags(tagsData)
  const tags = await getAllTags()
  console.log("✅ tags")

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

  // Jobs
  const jobsData = Array.from({ length: 100 }).map(() => {
    const categoryId =
      categories[faker.number.int({ min: 0, max: categories.length - 1 })]!.id
    const companyId =
      companies[faker.number.int({ min: 0, max: companies.length - 1 })]!.id
    const contractId =
      contracts[faker.number.int({ min: 0, max: contracts.length - 1 })]!.id
    const experienceId =
      experiences[faker.number.int({ min: 0, max: experiences.length - 1 })]!.id
    const levelId =
      levels[faker.number.int({ min: 0, max: levels.length - 1 })]!.id

    return {
      label: faker.person.jobTitle(),
      description: faker.lorem.text(),
      salaryMin: faker.number.int({ min: 10000, max: 20000 }),
      salaryMax: faker.number.int({ min: 25000, max: 35000 }),
      expiredAt: faker.date.soon({ days: 10 }),
      categoryId,
      contractId,
      companyId,
      experienceId,
      levelId,
    }
  })
  await createManyJobs(jobsData)
  const jobs = await getAllJobs()

  // Prisma does not yet support connecting records with createMany/updateMany methods, so we use a transaction through each record
  // @see https://github.com/prisma/prisma/issues/3143
  await db.$transaction(
    jobs.map((job) => {
      const benefitIds = benefits
        .slice(0, faker.number.int({ min: 3, max: benefits.length }))
        .map((benefit) => ({ id: benefit.id }))
      const tagIds = tags
        .slice(0, faker.number.int({ min: 3, max: tags.length }))
        .map((tag) => ({ id: tag.id }))

      return db.job.update({
        where: {
          id: job.id,
        },
        data: {
          benefits: {
            connect: benefitIds,
          },
          tags: {
            connect: tagIds,
          },
        },
      })
    })
  )
  console.log("✅ jobs")

  // Testimonials
  const testimonialsData = Array.from({ length: 10 }).map(() => ({
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
