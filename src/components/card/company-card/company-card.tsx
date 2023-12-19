import Image from "next/image"
import Link from "next/link"
import type { Company } from "@/types"
import { MapPinIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

interface CompanyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  company: Company
  totalJobs?: number
}

export function CompanyCard({
  company,
  totalJobs,
  className,
}: CompanyCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-md border border-gray-6 p-4 dark:border-dark-gray-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-x-4">
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
        <div className="flex-1">
          <div className="inline-flex items-center gap-x-2">
            <Heading as="h3" size="5" className="group-hover:underline">
              {company.label}
            </Heading>
            <Badge variant="danger">
              Featured
              <span className="sr-only">company</span>
            </Badge>
          </div>
          <p className="flex items-center gap-x-1 text-sm">
            <MapPinIcon className="h-4 w-4" />
            {company.city}, {company.country}
          </p>
        </div>
      </div>
      <Link
        href={`/company/${company.id}`}
        className={cn(buttonVariants({ variant: "soft" }), "flex")}
      >
        <span className="absolute inset-0"></span>
        {totalJobs ? (
          <>
            Open Positions ({totalJobs}{" "}
            <span className="sr-only">job offer(s)</span>)
          </>
        ) : (
          <>No Open Positions</>
        )}
      </Link>
    </div>
  )
}
