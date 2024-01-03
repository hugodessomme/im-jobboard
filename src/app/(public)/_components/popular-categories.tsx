import Link from "next/link"
import { ArrowRightIcon, CircleOffIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { getAllCategories } from "@/lib/fetchers/category"
import { formatNumber } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export async function PopularCategories() {
  const categories = await getAllCategories({
    orderBy: {
      label: "asc",
    },
    take: 8,
  })

  return (
    <section className="bg-gray-1 py-28 dark:bg-dark-gray-1">
      <div className="container">
        <div className="mb-14 flex items-center justify-between">
          <Heading as="h2" size="2">
            Popular Categories
          </Heading>
          <Button variant="outline">
            View All <span className="sr-only">Categories</span>
            <ArrowRightIcon />
          </Button>
        </div>

        <ul className="-m-6 grid grid-flow-col grid-cols-4 grid-rows-2 gap-4">
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className="group relative flex gap-x-4 bg-gray-2 p-6 transition-shadow hover:shadow-lg dark:bg-dark-gray-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-3 text-blue-9 transition-colors group-hover:bg-blue-10 group-hover:text-gray-1 dark:bg-dark-blue-3 dark:text-dark-blue-9 dark:group-hover:bg-dark-blue-10 dark:group-hover:text-dark-gray-1">
                  <CircleOffIcon className="h-6 w-6" />
                </div>
                <div>
                  <Heading
                    as="h3"
                    size="5"
                    className="mb-1 transition-colors group-hover:text-blue-11 group-hover:underline"
                  >
                    <Link href={`${routes.findJob}?category=${category.slug}`}>
                      <span className="absolute inset-0"></span>
                      {category.label}
                    </Link>
                  </Heading>
                  <span>
                    {formatNumber(category._count.job)} Open Positions
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
