import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

import { createManyCompanies, deleteManyCompanies } from "@/lib/actions/company"
import {
  createManyContracts,
  deleteManyContracts,
} from "@/lib/actions/contract"
import { createManyJobs, deleteManyJobs } from "@/lib/actions/job"
import { getManyCompanies } from "@/lib/fetchers/company"
import { getManyContracts } from "@/lib/fetchers/contract"

const db = new PrismaClient()

async function main() {
  console.log("Seeding...")
  console.time("Finished in")

  // Reset
  await deleteManyJobs()
  await deleteManyContracts()
  await deleteManyCompanies()
  console.log("✅ reset")

  // Contracts
  await createManyContracts([
    { label: "Full-Time" },
    { label: "Part-Time" },
    { label: "Internship" },
  ])
  const contracts = await getManyContracts()
  console.log("✅ contracts")

  // Companies
  const companiesData = Array.from({ length: 10 }).map((_) => ({
    label: faker.company.name(),
    city: faker.location.city(),
    country: faker.location.country(),
    imageUrl: faker.image.urlLoremFlickr({ category: "alphabet" }),
  }))
  await createManyCompanies(companiesData)
  const companies = await getManyCompanies()
  console.log("✅ companies")

  // Jobs
  const jobsData = Array.from({ length: 50 }).map((_) => {
    const companyId =
      companies[faker.number.int({ min: 0, max: companies.length - 1 })]!.id
    const contractId =
      contracts[faker.number.int({ min: 0, max: contracts.length - 1 })]!.id

    return {
      label: faker.person.jobTitle(),
      description: faker.lorem.text(),
      salaryMin: faker.number.int({ min: 10000, max: 20000 }),
      salaryMax: faker.number.int({ min: 25000, max: 35000 }),
      companyId,
      contractId,
    }
  })
  await createManyJobs(jobsData)
  console.log("✅ jobs")
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
