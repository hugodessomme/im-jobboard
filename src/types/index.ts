import { type LucideIcon } from "lucide-react"

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

export interface Job {
  label: string
  contract: "Part-Time" | "Full-Time" | "Internship"
  salary: {
    min: number
    max: number
  }
  company: Company
}

export interface Company {
  label: string
  city: string
  country: string
  jobs?: number
  featured?: boolean
}

export interface Testimonial {
  text: string
  author: string
  job: string
  rate: number
  imageUrl: string
}
