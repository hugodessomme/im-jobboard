import { type Job } from "@/types"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { JobCard } from "@/components/card/job-card/job-card"

// TODO: query real data
const jobs: Job[] = [
  {
    label: "Web Developer",
    contract: "Part-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Apple",
      city: "Cupertino",
      country: "USA",
    },
  },
  {
    label: "Software Engineer",
    contract: "Full-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Sony",
      city: "Tokyo",
      country: "Japan",
    },
  },
  {
    label: "Data Analyst",
    contract: "Internship",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Google",
      city: "Mountain View",
      country: "USA",
    },
  },
  {
    label: "Cybersecurity Specialist",
    contract: "Part-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Tesla",
      city: "Palo Alto",
      country: "USA",
    },
  },
  {
    label: "Project Manager",
    contract: "Full-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Samsung",
      city: "Seoul",
      country: "South Korea",
    },
  },
  {
    label: "Nurse",
    contract: "Internship",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "L'Oréal",
      city: "Paris",
      country: "France",
    },
  },
  {
    label: "Full Stack Developer",
    contract: "Part-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Apple",
      city: "Cupertino",
      country: "USA",
    },
  },
  {
    label: "Financial Analyst",
    contract: "Full-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Apple",
      city: "Cupertino",
      country: "USA",
    },
  },
  {
    label: "IT Technician",
    contract: "Internship",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Sony",
      city: "Tokyo",
      country: "Japan",
    },
  },
  {
    label: "Marketing Specialist",
    contract: "Part-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Google",
      city: "Mountain View",
      country: "USA",
    },
  },
  {
    label: "DevOps Engineer",
    contract: "Full-Time",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Tesla",
      city: "Palo Alto",
      country: "USA",
    },
  },
  {
    label: "Human Resources",
    contract: "Internship",
    salary: { min: 20000, max: 25000 },
    company: {
      label: "Samsung",
      city: "Seoul",
      country: "South Korea",
    },
  },
]

export function FeaturedJobs() {
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
          {/* TODO: replace key by id */}
          {jobs.map((job) => (
            <li key={job.label}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
