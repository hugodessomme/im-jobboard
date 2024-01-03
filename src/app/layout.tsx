import { type Metadata } from "next"

import { siteConfig } from "@/config/site"

import "@/styles/globals.css"

import { env } from "@/env"

import { fontSans } from "@/lib/fonts"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
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
    <html
      lang={siteConfig.lang}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${fontSans.className} bg-gray-2 text-gray-11 dark:bg-dark-gray-2 dark:text-dark-gray-11`}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
