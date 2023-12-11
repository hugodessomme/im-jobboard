import Link from "next/link"
import { MapPinIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

interface CompanyCardProps {
  company: {
    label: string
    city: string
    country: string
    jobs: number
    featured?: boolean
  }
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="relative rounded-md border border-gray-6 p-4 dark:border-dark-gray-6">
      <div className="mb-4 flex gap-x-4">
        <div className="h-14 w-14 rounded-sm bg-blue-3 dark:bg-dark-blue-3"></div>
        <div>
          <div className="inline-flex items-center gap-x-2">
            <Heading as="h3" size="5">
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
        href="/"
        className={cn(buttonVariants({ variant: "soft" }), "flex")}
      >
        <span className="absolute inset-0"></span>
        Open Positions ({company.jobs}{" "}
        <span className="sr-only">job offer(s)</span>)
      </Link>
    </div>
  )
}
