import Link from "next/link"
import { ChevronRightIcon, type LucideIcon } from "lucide-react"

import { Heading } from "@/components/ui/heading"

interface BreadcrumbProps {
  title: string
  segments: {
    label: string
    href: string
  }[]
  separator?: LucideIcon
}

export function Breadcrumb({
  title,
  segments,
  separator: Separator = ChevronRightIcon,
}: BreadcrumbProps) {
  return (
    <div className="bg-gray-3 py-4 dark:bg-dark-gray-3">
      <div className="container">
        <div className="flex justify-between">
          <Heading as="h1" size="4">
            {title}
          </Heading>

          <ul className="flex items-center space-x-1.5 text-sm">
            <li>
              <div>
                <Link href="/">Home</Link>
              </div>
            </li>

            {segments.map((segment, index) => {
              const isLastSegment = index === segments.length - 1

              if (isLastSegment) {
                return (
                  <li key={segment.label}>
                    <div className="flex items-center">
                      <Separator className="h-3 w-3 text-gray-11 dark:text-dark-gray-11" />
                      <Link
                        href={segment.label}
                        className="ml-1 font-semibold text-gray-12 dark:text-dark-gray-12"
                      >
                        {segment.label}
                      </Link>
                    </div>
                  </li>
                )
              }

              return (
                <li key={segment.label}>
                  <div className="flex items-center">
                    <Separator className="h-3 w-3 text-gray-11 dark:text-dark-gray-11" />
                    <Link href={segment.href} className="ml-1">
                      {segment.label}
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
