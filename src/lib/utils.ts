import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(
  value: number,
  locales: string | string[] | undefined = "en-US",
  options?: Intl.NumberFormatOptions | undefined
) {
  const formattedValue = new Intl.NumberFormat(locales, options).format(value)

  return formattedValue
}
