import type { Metadata } from "next"
import { env } from "@/env"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { routes } from "@/config/routes"

interface App {
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

export const app: App = {
  metadata: {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    applicationName: "im-jobboard",
    title: {
      template: `%s | im-jobboard`,
      default: "im-jobboard",
    },
    description:
      "Find a job that suits your interests & skills with im-jobboard",
    creator: "Hugo Dessomme",
    authors: [
      {
        name: "Hugo Dessomme",
        url: "https://github.com/hugodessomme/",
      },
    ],
  },
  lang: "en",
  headerNav: [
    {
      label: "Home",
      href: routes.home,
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
      href: routes.support,
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
