import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:ring-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-9 text-white ring-blue-8 hover:bg-blue-10 focus-visible:bg-blue-10",
        soft: "bg-blue-3 text-blue-11 ring-blue-8 hover:bg-blue-4 focus-visible:bg-blue-4 dark:bg-dark-blue-3 dark:text-dark-blue-11 dark:ring-dark-blue-8 dark:hover:bg-dark-blue-4 dark:focus-visible:bg-dark-blue-4",
        "soft-neutral":
          "bg-gray-3 text-gray-11 ring-gray-8 hover:bg-gray-4 focus-visible:bg-gray-4 dark:bg-dark-gray-3 dark:text-dark-gray-11 dark:ring-dark-gray-8 dark:hover:bg-dark-gray-4 dark:focus-visible:bg-dark-gray-4",
        outline:
          "border border-blue-7 text-blue-11 ring-blue-8 hover:border-blue-8 focus-visible:border-blue-8 dark:text-dark-blue-11 dark:ring-dark-blue-8 dark:hover:border-dark-blue-8 dark:focus-visible:border-dark-blue-8",
        reset: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
