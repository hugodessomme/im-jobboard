import { QuoteIcon, StarIcon } from "lucide-react"

import { type Testimonial } from "@/types/app"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonial
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 rounded-md bg-gray-1 p-6 shadow-md dark:bg-dark-gray-1",
        className
      )}
    >
      <div className="mb-1 flex gap-x-1">
        {Array.from({ length: testimonial.rate }).map((rate, i) => (
          <StarIcon
            key={i}
            className="fill-current text-blue-9 dark:text-dark-blue-9"
          />
        ))}
      </div>

      <p className="before:content-['“'] after:content-['”']">
        {testimonial.description}
      </p>

      <div className="mt-auto flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src={testimonial.imageUrl} />
          <AvatarFallback>??</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-bold text-gray-12 dark:text-dark-gray-12">
            {testimonial.name}
          </p>
          <p className="text-sm">{testimonial.job}</p>
        </div>
        <QuoteIcon className="h-10 w-10 text-gray-6 dark:text-dark-gray-6" />
      </div>
    </div>
  )
}
