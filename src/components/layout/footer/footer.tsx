import Link from "next/link"
import { BriefcaseIcon, ExternalLinkIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { headingVariants } from "@/components/ui/heading"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Footer() {
  return (
    <footer className="bg-dark-gray-2 text-dark-gray-11">
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-4 space-y-3">
              <p className="flex shrink-0 grow-0 basis-auto items-center gap-x-2 text-dark-gray-12">
                <BriefcaseIcon className="h-7 w-7" />
                <span className="text-lg font-bold">im-jobboard</span>
              </p>
              <p>
                Call Now:{" "}
                <a
                  href="tel:+13195550115"
                  className="text-dark-gray-12 hover:underline focus-visible:underline"
                >
                  (319) 555-0115
                </a>
              </p>
              <p className="text-sm">
                123 Main Street, Suite 456, New York, NY 10001{" "}
                <br role="presentation" />
                United States of America
              </p>
            </div>
            <div className="col-span-8">
              <ul className="grid grid-cols-4">
                {siteConfig.footerNav.map((group) => (
                  <li key={group.label}>
                    <span
                      className={cn(
                        headingVariants({ size: "4" }),
                        "mb-6 block text-dark-gray-12"
                      )}
                    >
                      {group.label}
                    </span>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="hover:underline focus-visible:underline"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-gray-6 py-5">
        <div className="container">
          <div className="flex justify-between">
            <p>&copy; 2024 im-jobboard</p>
            <ul className="flex gap-x-4">
              {siteConfig.socials.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={social.href}
                            target="_blank"
                            className="hover:text-blue-11 dark:hover:text-dark-blue-11"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="flex items-center gap-x-1">
                            {social.label}
                            <ExternalLinkIcon className="h-4 w-4" />
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
