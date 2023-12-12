import {
  BadgeCheckIcon,
  SearchIcon,
  UploadIcon,
  UserPlusIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/heading"

const steps = [
  {
    label: "Create an account",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ut.",
    icon: UserPlusIcon,
  },
  {
    label: "Upload CV/Resume",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ut.",
    icon: UploadIcon,
    active: true,
  },
  {
    label: "Find your job",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ut.",
    icon: SearchIcon,
  },
  {
    label: "Apply",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ut.",
    icon: BadgeCheckIcon,
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-3 py-28 dark:bg-dark-gray-3">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14 text-center">
          How it works
        </Heading>
        <ol className="flex gap-x-6">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <li key={step.label}>
                <div
                  className={cn(
                    "flex flex-col items-center space-y-3 rounded-md bg-gray-3 p-6 text-center dark:bg-dark-gray-3",
                    step.active && "bg-gray-1 dark:bg-dark-gray-1"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full bg-gray-1 text-blue-11 dark:bg-dark-gray-1 dark:text-dark-blue-11",
                      step.active &&
                        "bg-blue-9 text-gray-1 dark:bg-dark-blue-9 dark:text-dark-gray-1"
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <Heading as="h3" size="4">
                    {step.label}
                  </Heading>
                  <p>{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
