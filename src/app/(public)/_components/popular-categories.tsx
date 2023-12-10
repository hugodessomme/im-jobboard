import Link from "next/link"
import {
  ArrowRightIcon,
  BarChart2Icon,
  CodeIcon,
  DatabaseIcon,
  HeartPulseIcon,
  MegaphoneIcon,
  MonitorPlayIcon,
  MusicIcon,
  PenToolIcon,
} from "lucide-react"

import { formatNumber } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

// TODO: query real data
const categories = [
  { label: "Graphics & Design", value: 45904, icon: PenToolIcon },
  { label: "Music & Audio", value: 74875, icon: MusicIcon },
  { label: "Code & Programming", value: 61391, icon: CodeIcon },
  { label: "Account & Finance", value: 50364, icon: BarChart2Icon },
  { label: "Digital Marketing", value: 43359, icon: MegaphoneIcon },
  { label: "Health & Care", value: 93046, icon: HeartPulseIcon },
  { label: "Video & Animation", value: 4339, icon: MonitorPlayIcon },
  { label: "Data & Science", value: 18599, icon: DatabaseIcon },
]

export function PopularCategories() {
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
            const Icon = category.icon
            return (
              <li
                key={category.label}
                className="group relative flex gap-x-4 bg-gray-2 p-6 transition-shadow hover:shadow-lg dark:bg-dark-gray-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-3 text-blue-9 transition-colors group-hover:bg-blue-10 group-hover:text-gray-1 dark:bg-dark-blue-3 dark:text-dark-blue-9 dark:group-hover:bg-dark-blue-10 dark:group-hover:text-dark-gray-1">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <Heading
                    as="h3"
                    size="5"
                    className="mb-1 transition-colors group-hover:text-blue-11 group-hover:underline"
                  >
                    <Link href="/">
                      <span className="absolute inset-0"></span>
                      {category.label}
                    </Link>
                  </Heading>
                  <span>{formatNumber(category.value)} Open Positions</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
