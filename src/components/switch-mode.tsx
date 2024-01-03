"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function SwitchMode() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="soft-neutral"
      size="icon-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-pressed={theme === "dark"}
    >
      <span className="sr-only">Dark mode</span>
      <SunIcon className="inline h-5 w-5 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:inline" />
    </Button>
  )
}
