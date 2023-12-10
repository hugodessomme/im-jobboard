import Link from "next/link"

import { formatNumber } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"

// TODO: query real data
const jobs = [
  { label: "Web Developer", value: 45904 },
  { label: "Software Engineer", value: 74875 },
  { label: "Data Analyst", value: 61391 },
  { label: "Cybersecurity Specialist", value: 50364 },
  { label: "Project Manager", value: 43359 },
  { label: "Nurse", value: 93046 },
  { label: "Full Stack Developer", value: 4339 },
  { label: "Financial Analyst", value: 18599 },
  { label: "IT Technician", value: 50963 },
  { label: "Marketing Specialist", value: 20079 },
  { label: "DevOps Engineer", value: 28200 },
  { label: "Human Resources", value: 16627 },
]

export function MostPopularJobs() {
  return (
    <section className="bg-gray-1 py-28 dark:bg-dark-gray-1">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14">
          Most Popular Jobs
        </Heading>

        <ul className="-m-6 grid grid-flow-col grid-cols-4 grid-rows-3 gap-4">
          {jobs.map((job) => (
            <li
              key={job.label}
              className="group relative bg-gray-2 p-6 transition-shadow hover:shadow-lg dark:bg-dark-gray-2"
            >
              <Heading
                as="h3"
                size="5"
                className="mb-1 transition-colors group-hover:text-blue-11 group-hover:underline"
              >
                <Link href="/">
                  <span className="absolute inset-0"></span>
                  {job.label}
                </Link>
              </Heading>
              <span>{formatNumber(job.value)} Open Positions</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
