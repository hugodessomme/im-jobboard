import type { Metadata } from "next"
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
export interface JobCreate {}
export interface JobWithCompany {}
export interface JobWithCompanyWithContract {}

export interface Company {}
export interface CompanyCreate {}
export interface CompanyWithJobs {}

export interface Contract {}
export interface ContractCreate {}
export interface ContractWithJobs {}

export interface Testimonial {}
