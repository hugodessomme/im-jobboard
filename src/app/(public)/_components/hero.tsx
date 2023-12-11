import Image from "next/image"
import { BriefcaseIcon, Building2Icon, UsersRoundIcon } from "lucide-react"

import { cn, formatNumber } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"
import { JobForm } from "@/components/form/job-form"

// TODO: query real data
const stats = [
  {
    total: 175324,
    suffix: "Live Jobs",
    icon: BriefcaseIcon,
  },
  {
    total: 97354,
    suffix: "Companies",
    icon: Building2Icon,
    active: true,
  },
  {
    total: 3847154,
    suffix: "Candidates",
    icon: UsersRoundIcon,
  },
  {
    total: 7532,
    suffix: "New Jobs",
    icon: BriefcaseIcon,
  },
]

export function Hero() {
  return (
    <section className="bg-gray-2 py-28 dark:bg-dark-gray-2">
      <div className="container">
        <div className="mb-28 flex items-center">
          <div className="w-[520px] flex-shrink-0 space-y-5">
            <Heading as="h1" size="1">
              Find a job that suits your interests & skills.
            </Heading>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              veniam itaque alias omnis ratione, recusandae enim vel nobis rem
              incidunt!
            </p>

            <JobForm />

            <p>
              Suggestion:{" "}
              <span className="text-gray-12 dark:text-dark-gray-12">
                Designer, Software Developer, Digital Marketing, Video,
                Animation
              </span>
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Image src="/images/hero.svg" width={548} height={600} alt="" />
          </div>
        </div>

        <ul className="flex gap-x-5">
          {/* TODO: replace key by id */}
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <li key={item.suffix} className="flex-1">
                <div className="flex items-center gap-x-5 rounded-md bg-gray-1 p-5 shadow-lg dark:bg-dark-gray-1">
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-md bg-blue-3 text-blue-9 dark:bg-dark-blue-3 dark:text-dark-blue-9",
                      item.active &&
                        "bg-blue-10 text-gray-1 dark:bg-dark-blue-10 dark:text-dark-gray-1"
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p>
                      <span className="block text-2xl font-semibold text-gray-12 dark:text-dark-gray-12">
                        {formatNumber(item.total)}
                      </span>
                      <span className="text-gray-11 dark:text-dark-gray-11">
                        {item.suffix}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
