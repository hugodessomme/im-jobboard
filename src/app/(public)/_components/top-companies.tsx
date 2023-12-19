import { getManyCompanies } from "@/lib/fetchers/company"
import { Heading } from "@/components/ui/heading"
import { CompanyCard } from "@/components/card/company-card"

export async function TopCompanies() {
  const companies = await getManyCompanies({ limit: 6 })

  return (
    <section className="bg-gray-1 pb-28 pt-14 dark:bg-dark-gray-1">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14">
          Top Companies
        </Heading>

        <ul className="grid grid-cols-3 gap-4">
          {companies.map((company) => {
            // const totalJobs = company._count.jobs

            return (
              <li key={company.id}>
                {/* <CompanyCard company={company} totalJobs={totalJobs} /> */}
                <CompanyCard company={company} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
