export interface SiteConfig {
  lang: string
  name: string
  description: string
  url: string
  languages: Language[]
  headerNav: NavItem[]
}

export interface NavItem {
  label: string
  href: string
}

export interface Language {
  label: string
  value: string
}
