import Image from "next/image"
import Link from "next/link"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export default function CompanyIdNotFoundPage() {
  return (
    <main className="container pb-28 pt-28">
      <div className="space-y-16 text-center">
        <Heading>Company not found</Heading>
        <Image
          src="/images/not-found.svg"
          width={500}
          height={332}
          alt=""
          className="mx-auto"
        />
        <Link
          href={routes.company}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Find another company
        </Link>
      </div>
    </main>
  )
}
