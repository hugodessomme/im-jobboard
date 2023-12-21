"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface PaginationProps {
  itemsPerPage: number
  label: string
  totalItems: number
}

export function Pagination({
  itemsPerPage,
  label,
  totalItems,
}: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pagination = generatePagination(totalPages)
  const currentPage = Number(searchParams.get("page")) || 1

  function generatePageURL(page: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())

    return `${pathname}?${params.toString()}`
  }

  return (
    <nav aria-label={label}>
      <ul className="flex items-center justify-center space-x-2">
        <li>
          <PaginationArrow
            direction="left"
            href={generatePageURL(currentPage - 1)}
            isDisabled={currentPage === 1}
            page={currentPage - 1}
          />
        </li>

        {pagination.map((page) => (
          <li key={page}>
            <PaginationNumber
              page={page}
              href={generatePageURL(page)}
              isActive={currentPage === page}
            />
          </li>
        ))}

        <li>
          <PaginationArrow
            direction="right"
            href={generatePageURL(currentPage + 1)}
            isDisabled={currentPage >= totalPages}
            page={currentPage + 1}
          />
        </li>
      </ul>
    </nav>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
}: {
  href: string
  isActive: boolean
  page: number | string
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: isActive ? "default" : "outline",
          size: "icon",
        })
      )}
    >
      <span className="sr-only">Go to page </span>
      {page}
    </Link>
  )
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
  page,
}: {
  direction: "left" | "right"
  href: string
  isDisabled: boolean
  page: number | string
}) {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon

  return isDisabled ? (
    <div
      className={cn(
        buttonVariants({ variant: "soft", size: "icon" }),
        "opacity-30"
      )}
    >
      <Icon />
    </div>
  ) : (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",
        })
      )}
    >
      <span className="sr-only">Go back to page {page.toString()}</span>
      <Icon />
    </Link>
  )
}

function generatePagination(totalPages: number) {
  return Array.from({ length: totalPages }, (_, i) => i + 1)
}
