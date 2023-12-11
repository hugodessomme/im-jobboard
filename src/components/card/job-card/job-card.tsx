import Link from "next/link"
import { type Job } from "@/types"
import { BookmarkIcon, MapPinIcon } from "lucide-react"

import { cn, formatNumber } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Heading, headingVariants } from "@/components/ui/heading"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="relative rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
      <div className="mb-4">
        <Heading as="h3" size="5">
          <Link href="/" className="hover:underline focus-visible:underline">
            <span className="absolute inset-0"></span>
            {job.label}
          </Link>
        </Heading>
        <div className="inline-flex items-center gap-x-2">
          <Badge variant="success">
            <span className="sr-only">Contract: </span>
            {job.contract}
          </Badge>
          <p className="flex items-center gap-x-1 text-sm">
            Salary:{" "}
            {formatNumber(job.salary.min, "en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}{" "}
            -{" "}
            {formatNumber(job.salary.max, "en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="h-12 w-12 rounded-sm bg-blue-3 dark:bg-dark-blue-3"></div>
        <div className="flex-1">
          <p className={cn(headingVariants({ size: "6" }))}>
            {job.company.label}
          </p>
          <p className="flex items-center gap-x-1 text-sm">
            <MapPinIcon className="h-4 w-4" />
            {job.company.city}, {job.company.country}
          </p>
        </div>
        <div>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-6 text-gray-11 hover:bg-blue-3 hover:text-blue-11 dark:border-dark-gray-6 dark:text-dark-gray-11 dark:hover:bg-dark-blue-3 dark:hover:text-dark-blue-11"
                >
                  <BookmarkIcon className="h-5 w-5" />
                  <span className="sr-only">
                    Bookmark the &quot;{job.label}&quot; job offer
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Bookmark</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
