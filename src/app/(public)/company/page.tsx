import { redirect } from "next/navigation"

import { routes } from "@/config/routes"
import { getAllCompaniesPagination } from "@/lib/fetchers/company"
import { companySearchParamsSchema } from "@/lib/validations/params"
import { Heading } from "@/components/ui/heading"
import { CompanyCard } from "@/components/card/company-card"
import { Breadcrumb } from "@/components/nav/breadcrumb"
import { Pagination } from "@/components/nav/pagination"

interface CompanyPageProps {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function CompanyPage({ searchParams }: CompanyPageProps) {
  const { page, per_page } = companySearchParamsSchema.parse(searchParams)
  const pageAsNumber = Number(page)
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber
  const perPageAsNumber = Number(per_page)

  const [companies, totalCompanies] = await getAllCompaniesPagination({
    skip: (fallbackPage - 1) * perPageAsNumber,
    take: perPageAsNumber,
  })

  // redirect to first page if user requests an invalid page
  if (pageAsNumber > Math.ceil(totalCompanies / perPageAsNumber)) {
    redirect(routes.findJob)
  }

  console.log({ per_page })

  return (
    <>
      <Breadcrumb
        title="Company"
        segments={[{ label: "Company", href: routes.company }]}
      />

      <main className="container py-8">
        <Heading
          as="h2"
          size="6"
          className="mb-4 text-gray-11 dark:text-dark-gray-11"
        >
          Results: {totalCompanies} companies
        </Heading>

        <ul className="mb-8 grid grid-cols-3 gap-4">
          {companies.map((company) => (
            <li key={company.id}>
              <CompanyCard company={company} totalJobs={company._count.job} />
            </li>
          ))}
        </ul>

        <Pagination
          label="Companies pagination"
          itemsPerPage={perPageAsNumber}
          totalItems={totalCompanies}
        ></Pagination>
      </main>
    </>
  )
}
