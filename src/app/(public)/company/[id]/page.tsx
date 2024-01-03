import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  BuildingIcon,
  CalendarIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"

import { routes } from "@/config/routes"
import { siteConfig } from "@/config/site"
import { getCompany } from "@/lib/fetchers/company"
import { getAllJobsByCompanyWithCount } from "@/lib/fetchers/job"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { JobCard } from "@/components/card/job-card"
import { Breadcrumb } from "@/components/nav/breadcrumb"

interface CompanyIdPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: CompanyIdPageProps): Promise<Metadata> {
  const company = await getCompany(params.id)

  if (!company) {
    return {}
  }

  return {
    ...siteConfig.metadata,
    title: `${company.label} | Company`,
  }
}

export default async function CompanyIdPage({ params }: CompanyIdPageProps) {
  const company = await getCompany(params.id)

  // TODO: handle no job found
  if (!company) {
    return
  }

  const [jobs, totalJobs] = await getAllJobsByCompanyWithCount(company.id)

  return (
    <>
      <Breadcrumb
        title={company.label}
        segments={[
          { label: "Company", href: routes.company },
          { label: company.label, href: `${routes.company}/${company.id}` },
        ]}
      />

      <main className="container relative pb-28 pt-[14.5rem]">
        <div className="absolute left-0 right-0 top-0 h-[14.5rem] w-[87.5rem] overflow-hidden rounded-b-md bg-blue-3 dark:bg-dark-blue-3">
          <Image src={company.coverImageUrl} alt="" fill />
        </div>

        {/* Heading */}
        <div className="relative -top-8 mb-4 flex items-center gap-x-4 rounded-md border border-gray-6 bg-gray-1 p-8 dark:border-dark-gray-6 dark:bg-dark-gray-1">
          <div className="relative h-14 w-14 overflow-hidden rounded-sm bg-blue-3 dark:bg-dark-blue-3">
            {company.imageUrl ? (
              <Image
                src={company.imageUrl}
                alt={company.label}
                fill
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div>
              <Heading as="h2" size="3">
                {company.label}
              </Heading>
              <p className="flex items-center gap-x-1">
                <MapPinIcon className="h-4 w-4" />
                {company.city}, {company.country}
              </p>
            </div>

            <Link
              href="#company-jobs"
              className={buttonVariants({ variant: "default" })}
            >
              View Open Positions
            </Link>
          </div>
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
            {/* Overview */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="sr-only mb-2">
                Overview
              </Heading>

              <ul className="grid grid-cols-2 gap-y-4">
                <li className="flex flex-col">
                  <CalendarIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="text-sm uppercase">Year of founding</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {/* TODO: query real data */}
                    {new Date().toLocaleDateString()}
                  </span>
                </li>
                <li className="flex flex-col">
                  <BuildingIcon className="mb-3 text-blue-11 dark:text-dark-blue-11" />
                  <span className="text-sm uppercase">Industry</span>
                  <span className="font-semibold text-gray-12 dark:text-dark-gray-12">
                    {company.industry.label}
                  </span>
                </li>
              </ul>
            </aside>

            {/* Contact Information */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Contact Information
              </Heading>

              <ul className="space-y-4 divide-y divide-gray-6 dark:divide-dark-gray-6 dark:border-dark-gray-6">
                {company.companyUrl ? (
                  <li className="flex gap-x-4 pt-4">
                    <GlobeIcon className="text-blue-11 dark:text-dark-blue-11" />
                    <span className="flex flex-col">
                      <span className="text-sm uppercase">Website</span>
                      <Link
                        href={company.companyUrl}
                        className="font-semibold text-gray-12 hover:underline focus-visible:underline dark:text-dark-gray-12"
                      >
                        {company.companyUrl}
                      </Link>
                    </span>
                  </li>
                ) : null}

                {company.phone ? (
                  <li className="flex gap-x-4 pt-4">
                    <PhoneIcon className="text-blue-11 dark:text-dark-blue-11" />
                    <span className="flex flex-col">
                      <span className="text-sm uppercase">Phone</span>
                      <Link
                        href={`tel:${company.phone}`}
                        className="font-semibold text-gray-12 hover:underline focus-visible:underline dark:text-dark-gray-12"
                      >
                        {company.phone}
                      </Link>
                    </span>
                  </li>
                ) : null}

                {company.email ? (
                  <li className="flex gap-x-4 pt-4">
                    <MailIcon className="text-blue-11 dark:text-dark-blue-11" />
                    <span className="flex flex-col">
                      <span className="text-sm uppercase">Email Address</span>
                      <Link
                        href={`mailto:${company.email}`}
                        className="font-semibold text-gray-12 hover:underline focus-visible:underline dark:text-dark-gray-12"
                      >
                        {company.email}
                      </Link>
                    </span>
                  </li>
                ) : null}
              </ul>
            </aside>

            {/* Follow Us */}
            <aside className="rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
              <Heading as="h3" size="5" className="mb-2">
                Follow Us
              </Heading>

              <ul className="flex gap-x-2">
                {company.facebookUrl ? (
                  <li>
                    <Link
                      href={company.facebookUrl}
                      className={cn(
                        buttonVariants({ variant: "soft" }),
                        "w-10 px-2"
                      )}
                    >
                      <FacebookIcon />
                      <span className="sr-only">Follow us on Facebook</span>
                    </Link>
                  </li>
                ) : null}

                {company.twitterUrl ? (
                  <li>
                    <Link
                      href={company.twitterUrl}
                      className={cn(
                        buttonVariants({ variant: "soft" }),
                        "w-10 px-2"
                      )}
                    >
                      <TwitterIcon />
                      <span className="sr-only">Follow us on Twitter</span>
                    </Link>
                  </li>
                ) : null}

                {company.instagramUrl ? (
                  <li>
                    <Link
                      href={company.instagramUrl}
                      className={cn(
                        buttonVariants({ variant: "soft" }),
                        "w-10 px-2"
                      )}
                    >
                      <InstagramIcon />
                      <span className="sr-only">Follow us on Instagram</span>
                    </Link>
                  </li>
                ) : null}

                {company.youtubeUrl ? (
                  <li>
                    <Link
                      href={company.youtubeUrl}
                      className={cn(
                        buttonVariants({ variant: "soft" }),
                        "w-10 px-2"
                      )}
                    >
                      <YoutubeIcon />
                      <span className="sr-only">Follow us on YouTube</span>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </aside>
          </div>
        </div>
      </main>

      <Separator />

      {/* Open Positions */}
      <section
        id="company-jobs"
        className="bg-gray-1 py-28 dark:bg-dark-gray-1"
      >
        <div className="container">
          <Heading as="h2" size="2" className="mb-14">
            Open Positions (<span className="sr-only">total: </span>
            {totalJobs})
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
    </>
  )
}
