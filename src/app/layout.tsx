import { type Metadata } from "next"

import { app } from "@/config/app"

import "@/styles/globals.css"

import { fontSans } from "@/lib/fonts"
import { Providers } from "@/components/providers"

export const metadata: Metadata = app.metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={app.lang} className="scroll-smooth" suppressHydrationWarning>
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
