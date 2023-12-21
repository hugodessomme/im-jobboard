import type { LucideIcon } from "lucide-react"

export interface SiteConfig {
  lang: string
  name: string
  description: string
  url: string
  languages: Language[]
  headerNav: NavItem[]
  footerNav: {
    label: string
    items: NavItem[]
  }[]
  socials: (NavItem & { icon: LucideIcon })[]
}

export interface NavItem {
  label: string
  href: string
}

export interface Language {
  label: string
  value: string
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
