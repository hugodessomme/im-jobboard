import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-7 bg-gray-1 px-3 py-2 ring-offset-gray-1 file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-8 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-gray-7 dark:bg-dark-gray-1 dark:ring-offset-dark-gray-1 dark:placeholder:text-dark-gray-11 dark:focus-visible:ring-dark-gray-8",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
