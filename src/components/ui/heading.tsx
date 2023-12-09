import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva("text-gray-12 dark:text-dark-gray-12", {
  variants: {
    size: {
      "1": "scroll-m-20 text-5xl font-bold tracking-tight",
      "2": "scroll-m-20 text-3xl font-semibold tracking-tight",
      "3": "scroll-m-20 text-2xl font-semibold tracking-tight",
      "4": "scroll-m-20 text-xl font-semibold tracking-tight",
      "5": "scroll-m-20 text-lg font-semibold tracking-tight",
      "6": "scroll-m-20 text-base font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    size: "1",
  },
})

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, as: Comp = "h1", ...props }, ref) => {
    return (
      <Comp
        className={cn(headingVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
