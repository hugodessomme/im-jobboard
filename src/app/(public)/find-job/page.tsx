import { routes } from "@/config/routes"
import { getManyJobsPagination } from "@/lib/fetchers/job"
import { jobSearchParamsSchema } from "@/lib/validations/params"
import { Heading } from "@/components/ui/heading"
import { JobCard } from "@/components/card/job-card"
import { Breadcrumb } from "@/components/nav/breadcrumb"
import { Pagination } from "@/components/nav/pagination"

interface FindJobPageProps {
  searchParams: Record<string, string | string[] | undefined>
}

export default async function FindJobPage({ searchParams }: FindJobPageProps) {
  const { page, per_page } = jobSearchParamsSchema.parse(searchParams)
  const pageAsNumber = Number(page)
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber
  const perPageAsNumber = Number(per_page)

  const [jobs, totalJobs] = await getManyJobsPagination({
    skip: (fallbackPage - 1) * perPageAsNumber,
    take: perPageAsNumber,
  })

  return (
    <>
      <Breadcrumb
        title="Find Job"
        segments={[{ label: "Find Job", href: routes.findJob }]}
      />

      <main className="container py-8">
        <Heading
          as="h2"
          size="6"
          className="mb-4 text-gray-11 dark:text-dark-gray-11"
        >
          Results: {totalJobs} job offers
        </Heading>

        <ul className="mb-8 grid grid-cols-3 gap-4">
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>

        <Pagination
          label="Job offers pagination"
          itemsPerPage={perPageAsNumber}
          totalItems={totalJobs}
        ></Pagination>
      </main>
    </>
  )
}
