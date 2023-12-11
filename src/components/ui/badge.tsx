import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-tight",
  {
    variants: {
      variant: {
        default:
          "border-gray-6 bg-gray-3 text-gray-11 dark:border-dark-gray-6 dark:bg-dark-gray-3 dark:text-dark-gray-11",
        primary:
          "border-blue-6 bg-blue-3 text-blue-11 dark:border-dark-blue-6 dark:bg-dark-blue-3 dark:text-dark-blue-11",
        danger:
          "border-red-6 bg-red-3 text-red-11 dark:border-dark-red-6 dark:bg-dark-red-3 dark:text-dark-red-11",
        success:
          "border-green-6 bg-green-3 text-green-11 dark:border-dark-green-6 dark:bg-dark-green-3 dark:text-dark-green-11",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <p className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
