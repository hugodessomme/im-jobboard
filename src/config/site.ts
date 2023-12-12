import type { SiteConfig } from "@/types"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"

import { routes } from "@/config/routes"

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
      href: routes.findJob,
    },
    {
      label: "Candidate",
      href: routes.candidate,
    },
    {
      label: "Company",
      href: routes.company,
    },
    {
      label: "Pricing",
      href: routes.pricing,
    },
    {
      label: "Support",
      href: routes.pricing,
    },
  ],
  footerNav: [
    {
      label: "Quick Links",
      items: [
        {
          label: "About",
          href: routes.about,
        },
        {
          label: "Contact",
          href: routes.contact,
        },
        {
          label: "Pricing",
          href: routes.pricing,
        },
        {
          label: "Blog",
          href: routes.blog,
        },
      ],
    },
    {
      label: "Candidate",
      items: [
        {
          label: "Find Job",
          href: routes.findJob,
        },
        {
          label: "Browse Companies",
          href: routes.company,
        },
        {
          label: "Dashboard",
          href: routes.dashboard,
        },
        {
          label: "Saved Jobs",
          href: `${routes.dashboard}${routes.favorites}`,
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          label: "Post a Job",
          href: routes.about,
        },
        {
          label: "Browse Candidates",
          href: routes.candidate,
        },
        {
          label: "Dashboard",
          href: routes.dashboard,
        },
        {
          label: "Applications",
          href: routes.applications,
        },
      ],
    },
    {
      label: "Support",
      items: [
        {
          label: "FAQ",
          href: routes.faq,
        },
        {
          label: "Privacy Policy",
          href: routes.privacyPolicy,
        },
        {
          label: "Terms & Conditions",
          href: routes.termsConditions,
        },
      ],
    },
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: FacebookIcon,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: YoutubeIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: InstagramIcon,
    },
    {
      label: "Twitter",
      href: "https://www.twitter.com/",
      icon: TwitterIcon,
    },
  ],
}
