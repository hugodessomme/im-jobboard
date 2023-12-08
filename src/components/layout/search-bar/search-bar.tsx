import Link from "next/link"
import { BriefcaseIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { JobForm } from "@/components/form/job-form"

function SearchBar() {
  return (
    <div className="border-b border-gray-6 bg-gray-1 py-4 shadow-sm dark:border-dark-gray-6 dark:bg-dark-gray-1">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-10">
            <Link
              href="/"
              className="inline-flex shrink-0 grow-0 basis-auto items-center gap-x-2"
            >
              <BriefcaseIcon className="h-7 w-7 text-blue-9 dark:text-dark-blue-9" />
              <span className="text-lg font-bold text-gray-12 dark:text-dark-gray-12">
                im-jobboard
              </span>
            </Link>

            <JobForm />
          </div>

          <ul className="flex gap-x-2">
            <li>
              <Link
                href="/sign-in"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="new-job"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Post A Job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { SearchBar }
