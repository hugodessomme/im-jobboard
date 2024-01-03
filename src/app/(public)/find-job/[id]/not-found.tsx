import Image from "next/image"
import Link from "next/link"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export default function FindJobIdNotFoundPage() {
  return (
    <main className="container pb-28 pt-28">
      <div className="space-y-16 text-center">
        <Heading>Job not found</Heading>
        <Image
          src="/images/not-found.svg"
          width={500}
          height={332}
          alt=""
          className="mx-auto"
        />
        <Link
          href={routes.findJob}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Find another job
        </Link>
      </div>
    </main>
  )
}
