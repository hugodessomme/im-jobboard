import type {
  CompanyInsert,
  CompanySelect,
  ContractInsert,
  ContractSelect,
  JobInsert,
  JobSelect,
} from "@/db/schema"
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

export interface Job extends JobSelect {}
export interface JobCreate extends JobInsert {}
export interface JobWithCompany extends Job {
  company: Company
}
export interface JobWithCompanyWithContract extends Job {
  company: Company
  contract: Contract
}

export interface Company extends CompanySelect {}
export interface CompanyCreate extends CompanyInsert {}
export interface CompanyWithJobs extends Company {
  jobs: Job[]
}

export interface Contract extends ContractSelect {}
export interface ContractCreate extends ContractInsert {}
export interface ContractWithJobs extends Contract {
  jobs: Job[] | null
}

export interface Testimonial {
  text: string
  author: string
  job: string
  rate: number
  imageUrl: string
}
