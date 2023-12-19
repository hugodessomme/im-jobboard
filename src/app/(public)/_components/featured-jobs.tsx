import { ArrowRightIcon } from "lucide-react"

import { getManyJobs } from "@/lib/fetchers/job"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { JobCard } from "@/components/card/job-card"

export async function FeaturedJobs() {
  const jobs = await getManyJobs({
    limit: 6,
  })

  return (
    <section className="bg-gray-1 pb-14 pt-28 dark:bg-dark-gray-1">
      <div className="container">
        <div className="mb-14 flex items-center justify-between">
          <Heading as="h2" size="2">
            Featured Jobs
          </Heading>
          <Button variant="outline">
            View All <span className="sr-only">Categories</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
