import Link from "next/link"
import { getAllJobs } from "@/entities/job"
import { ArrowRightIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { JobCard } from "@/components/card/job-card"

export async function FeaturedJobs() {
  const jobs = await getAllJobs({ take: 12 })

  return (
    <section className="bg-gray-1 pb-14 pt-28 dark:bg-dark-gray-1">
      <div className="container">
        <div className="mb-14 flex items-center justify-between">
          <Heading as="h2" size="2">
            Featured Jobs
          </Heading>
          <Link
            href={routes.findJob}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View All <span className="sr-only">Categories</span>
            <ArrowRightIcon />
          </Link>
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
