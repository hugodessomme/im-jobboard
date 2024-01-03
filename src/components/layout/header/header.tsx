import Link from "next/link"
import { PhoneCallIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { SwitchMode } from "@/components/switch-mode"

function Header() {
  return (
    <header className="bg-gray-3 text-sm dark:bg-dark-gray-3">
      <div className="container flex justify-between">
        <nav>
          <ul className="flex gap-x-6">
            {siteConfig.headerNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block border-b-2 border-transparent px-1 py-3 outline-none hover:border-blue-8 hover:text-blue-11 focus-visible:border-blue-8 focus-visible:text-blue-11 dark:hover:border-dark-blue-8 dark:hover:text-dark-blue-11 dark:focus-visible:border-dark-blue-8 dark:focus-visible:text-dark-blue-11"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-x-6">
          <li>
            <a
              href="tel:+1-101-111-1001"
              className="flex items-center py-3 font-bold outline-none hover:underline focus-visible:underline"
            >
              <PhoneCallIcon className="mr-3 h-5 w-5" />
              +1-101-111-1001
            </a>
          </li>
          <li>
            <SwitchMode />
          </li>
        </ul>
      </div>
    </header>
  )
}

export { Header }
