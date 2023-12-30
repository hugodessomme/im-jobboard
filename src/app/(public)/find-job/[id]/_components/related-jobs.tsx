import Link from "next/link"
import { Job } from "@/types"

import { getManyJobs } from "@/lib/fetchers/job"
import { Heading } from "@/components/ui/heading"
import { JobCard } from "@/components/card/job-card"

interface RelatedJobsProps {
  jobId: string
  categoryId: string
}

export async function RelatedJobs({ jobId, categoryId }: RelatedJobsProps) {
  const jobs = await getManyJobs({
    where: {
      NOT: {
        id: {
          equals: jobId,
        },
      },
      category: {
        id: {
          equals: categoryId,
        },
      },
    },
    take: 6,
  })

  return (
    <section className="bg-gray-1 py-28 dark:bg-dark-gray-1">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14">
          Related Jobs
        </Heading>

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
