import { clsx, type ClassValue } from "clsx"
import slugify from "slugify"
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

export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function generateSlug(value: string) {
  const formattedValue = slugify(value, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
  })

  return formattedValue
}
