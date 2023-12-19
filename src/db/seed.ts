import "dotenv/config"

import type { CompanyCreate, JobCreate } from "@/types"
import { faker } from "@faker-js/faker"

import { createManyCompanies, deleteManyCompanies } from "@/lib/actions/company"
import {
  createManyContracts,
  deleteManyContracts,
} from "@/lib/actions/contract"
import { createManyJobs, deleteManyJobs } from "@/lib/actions/job"

async function seed() {
  console.log("Running seed command...")
  console.time("Finished in")

  // Reset
  await deleteManyContracts()
  await deleteManyJobs()
  await deleteManyCompanies()
  console.log("✅ reset")

  // Contracts
  const contracts = await createManyContracts([
    { label: "Full-Time" },
    { label: "Part-Time" },
    { label: "Internship" },
  ])
  console.log("✅ contracts")

  // Companies
  const companiesData: CompanyCreate[] = Array.from({ length: 10 }).map(
    (_) => ({
      label: faker.company.name(),
      city: faker.location.city(),
      country: faker.location.country(),
      imageUrl: faker.image.urlLoremFlickr({ category: "alphabet" }),
    })
  )
  const companies = await createManyCompanies(companiesData)
  console.log("✅ companies")

  // Jobs
  const jobsData: JobCreate[] = Array.from({ length: 50 }).map((_) => {
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

seed()
  .catch((e) => {
    console.error(`❌ ${e}`)
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    console.log("🌱 The seed command has been executed.")
    console.timeEnd("Finished in")
  })
