import Image from "next/image"
import {
  BarChartIcon,
  BookmarkIcon,
  BoxesIcon,
  BriefcaseIcon,
  CalendarIcon,
  FacebookIcon,
  GlobeIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  MapIcon,
  TimerIcon,
  TwitterIcon,
} from "lucide-react"

import { routes } from "@/config/routes"
import { getJob } from "@/lib/fetchers/job"
import { formatNumber } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Breadcrumb } from "@/components/nav/breadcrumb"

import { RelatedJobs } from "./_components/related-jobs"

interface FindJobIdPageProps {
  params: {
    id: string
  }
}

export default async function FindJobIdPage({ params }: FindJobIdPageProps) {
  const job = await getJob(params.id)

  // TODO: handle no job found
  if (!job) {
    return
  }

  return (
    <>
      <Breadcrumb
        title="Job Details"
        segments={[
          { label: "Find Job", href: routes.findJob },
          { label: job.label, href: `${routes.findJob}/${job.id}` },
        ]}
      />

      <main className="container pb-28 pt-8">
        {/* Heading */}
        <div className="mb-8 flex justify-between">
          <div className="flex items-center gap-x-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-sm bg-blue-3 dark:bg-dark-blue-3">
              {job.company.imageUrl ? (
                <Image
                  src={job.company.imageUrl}
                  alt={job.company.label}
                  fill
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <div className="space-y-0.5">
              <Heading as="h2" size="3">
                {job.label}
              </Heading>
              <p className="flex gap-x-2">
                at {job.company.label}
                <Badge as="span" variant="success">
                  <span className="sr-only">Contract: </span>
                  {job.contract.label}
                </Badge>
              </p>
            </div>
          </div>

          <ul className="flex gap-x-2">
            <li>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="soft" className="w-10 px-2">
                      <BookmarkIcon className="h-5 w-5" />
                      <span className="sr-only">
                        Bookmark the &quot;{job.label}&quot; job offer
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bookmark</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <Button>Apply Now</Button>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-12 gap-x-8">
          {/* Description */}
          <div className="col-span-7">
            <Heading as="h3" size="5">
              Description
            </Heading>

            {/* TODO: query real data */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              expedita? Distinctio a quis hic consequatur alias incidunt officia
              nisi nostrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              sunt veritatis error voluptatem voluptatibus ratione itaque quis
              sequi consequatur porro illo, nesciunt accusamus ea libero
              pariatur quaerat assumenda aspernatur? Unde!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque
              minima quia impedit dicta. Et, voluptate dolore. Ad sunt minus
              animi facilis reprehenderit consectetur in optio distinctio
              dolorem repellendus tenetur nam, tempora beatae porro? Natus
              ducimus amet pariatur voluptatum nam fuga quis a provident? Hic
              velit nobis et architecto vero officiis eum minus sint rerum enim!
              Magnam delectus eligendi obcaecati.
            </p>
          </div>

          <div className="col-span-5 space-y-4">
            {/* Salary / Location / Remote */}
            <aside className="rounded-md border border-gray-6 py-4 dark:border-dark-gray-6">
              <ul className="flex divide-x divide-gray-6 dark:divide-dark-gray-6 dark:border-dark-gray-6">
                <li className="flex flex-1 flex-col items-center justify-center gap-y-1 px-4 text-center">
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    Salary (USD)
                  </span>
                  <span className="text-green-11 dark:text-dark-green-11">
                    {formatNumber(job.salaryMin, "en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}{" "}
                    -{" "}
                    {formatNumber(job.salaryMax, "en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span>Yearly Salary</span>
                </li>
                <li className="flex flex-1 flex-col items-center gap-y-1 px-4 text-center">
                  <MapIcon className="text-blue-11 dark:text-dark-blue-11" />
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    Job Location
                  </span>
                  <span>
                    {job.company.city}, {job.company.country}
                  </span>
                </li>
                <li className="flex flex-1 flex-col items-center gap-y-1 px-4 text-center">
                  <GlobeIcon className="text-blue-11 dark:text-dark-blue-11" />
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    Remote Job
                  </span>
                  <span>Yes</span>
                </li>
              </ul>
            </aside>

            {/* Overview */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Overview
              </Heading>

              <ul className="grid grid-cols-3 gap-y-4">
                <li className="flex flex-col">
                  <BarChartIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="uppercase">Level:</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {/* TODO: add level to schema */}
                    Expert
                  </span>
                </li>
                <li className="flex flex-col">
                  <BoxesIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="uppercase">Experience:</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {/* TODO: add education to schema */}
                    &gt; 5 years
                  </span>
                </li>
                <li className="flex flex-col">
                  <BriefcaseIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="uppercase">Education:</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {/* TODO: add education to schema */}
                    N/A
                  </span>
                </li>
                <li className="flex flex-col">
                  <CalendarIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="uppercase">Posted:</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {job.createdAt?.toLocaleDateString()}
                  </span>
                </li>
                <li className="flex flex-col">
                  <TimerIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="uppercase">Expires:</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {/* TODO: add expiration date to schema */}
                    N/A
                  </span>
                </li>
              </ul>
            </aside>

            {/* Benefits */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Benefits
              </Heading>

              <ul className="flex flex-wrap gap-2">
                {/* TODO: query real data */}
                {Array.from({ length: 10 }).map(() => (
                  <li>
                    <Badge variant="success">Lorem ipsum</Badge>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Tags */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Tags
              </Heading>

              <ul className="flex flex-wrap gap-2">
                {/* TODO: query real data */}
                {Array.from({ length: 10 }).map(() => (
                  <li>
                    <Badge>Lorem ipsum</Badge>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Share */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Share this job
              </Heading>

              <ul className="flex gap-x-2">
                <li>
                  <Button variant="soft">
                    <LinkIcon className="mr-2 h-5 w-5" />
                    Copy Job URL
                  </Button>
                </li>
                <li>
                  <Button variant="soft" className="w-10 px-2">
                    <LinkedinIcon />
                    <span className="sr-only">
                      Share this job offer on LinkedIn
                    </span>
                  </Button>
                </li>
                <li>
                  <Button variant="soft" className="w-10 px-2">
                    <FacebookIcon />
                    <span className="sr-only">
                      Share this job offer on Facebook
                    </span>
                  </Button>
                </li>
                <li>
                  <Button variant="soft" className="w-10 px-2">
                    <TwitterIcon />
                    <span className="sr-only">
                      Share this job offer on Twitter
                    </span>
                  </Button>
                </li>
                <li>
                  <Button variant="soft" className="w-10 px-2">
                    <MailIcon />
                    <span className="sr-only">
                      Share this job offer by email
                    </span>
                  </Button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </main>

      <Separator />

      <RelatedJobs jobId={job.id} categoryId={job.category.id} />
    </>
  )
}
