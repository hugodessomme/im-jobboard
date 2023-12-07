import { type Metadata } from "next"

import { siteConfig } from "@/config/site"

import "@/styles/globals.css"

import { fontSans } from "@/lib/fonts"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteConfig.lang} className="scroll-smooth">
      <body
        className={`font-sans ${fontSans.variable} bg-gray-2 text-gray-11 dark:bg-dark-gray-2 dark:text-dark-gray-11`}
      >
        {children}
      </body>
    </html>
  )
}
