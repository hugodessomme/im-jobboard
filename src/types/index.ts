import type { Metadata } from "next"
import { Prisma } from "@prisma/client"
import type { LucideIcon } from "lucide-react"

import type { WithRequired } from "./utils"

export interface SiteConfig {
  metadata: WithRequired<
    Metadata,
    "metadataBase" | "applicationName" | "title" | "description"
  >
  lang: string
  headerNav: {
    label: string
    href: string
  }[]
  footerNav: {
    label: string
    items: {
      label: string
      href: string
    }[]
  }[]
  socials: {
    label: string
    href: string
    icon: LucideIcon
  }[]
}

export interface Job {}
export interface JobCreate extends Prisma.JobCreateInput {}
export interface JobCreateMany extends Prisma.JobCreateManyInput {}
