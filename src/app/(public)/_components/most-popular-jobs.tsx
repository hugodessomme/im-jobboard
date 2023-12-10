import Link from "next/link"

import { formatNumber } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"

// TODO: query real data
const jobs = [
  { label: "Développeur web", value: 45904 },
  { label: "Ingénieur logiciel", value: 74875 },
  { label: "Analyste de données", value: 61391 },
  { label: "Spécialiste cybersécurité", value: 50364 },
  { label: "Gestionnaire de projet", value: 43359 },
  { label: "Infirmier/infirmière", value: 93046 },
  { label: "Développeur full stack", value: 4339 },
  { label: "Analyste financier", value: 18599 },
  { label: "Technicien informatique", value: 50963 },
  { label: "Spécialiste marketing", value: 20079 },
  { label: "Ingénieur DevOps", value: 28200 },
  { label: "Ressources humaines", value: 16627 },
]

export function MostPopularJobs() {
  return (
    <section className="bg-gray-1 py-28 dark:bg-dark-gray-1">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14">
          Most Popular Jobs
        </Heading>

        <ul className="-m-6 grid grid-flow-col grid-cols-4 grid-rows-3 gap-x-6">
          {jobs.map((job) => (
            <li
              key={job.label}
              className="group relative p-6 transition-shadow hover:shadow-lg"
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
