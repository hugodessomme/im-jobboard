import type { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  lang: "en",
  name: "im-jobboard",
  description:
    "An open source boilerplate to quickly set up any new project with Next.js 14.",
  url: "https://github.com/hugodessomme/im-boilerplate",
  languages: [
    { label: "🇺🇸 English", value: "en" },
    { label: "🇫🇷 Français", value: "fr" },
    { label: "🇷🇺 Русский", value: "ru" },
  ],
  headerNav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Find Job",
      href: "/find-job",
    },
    {
      label: "Candidate",
      href: "/candidate",
    },
    {
      label: "Company",
      href: "/company",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Support",
      href: "/support",
    },
  ],
}
