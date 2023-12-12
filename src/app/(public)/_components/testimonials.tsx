import { Testimonial } from "@/types"

import { Heading } from "@/components/ui/heading"
import { TestimonialCard } from "@/components/card/testimonial-card"

// TODO: query real data
const testimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere et est itaque sint veritatis.",
    author: "Robert Fox",
    job: "UI/UX Designer",
    rate: 5,
    imageUrl: "https://github.com/hugodessomme.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A libero repudiandae consequuntur fugit itaque veritatis incidunt voluptas nisi odio velit!",
    author: "Bessie Cooper",
    job: "Creative Director",
    rate: 4,
    imageUrl: "https://github.com/anastasiadrokina.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestias placeat. Molestiae saepe mollitia soluta facere corporis ut quos, doloribus nisi, quae deserunt, quia ea.",
    author: "Jane Cooper",
    job: "Photographer",
    rate: 5,
    imageUrl: "https://github.com/shadcn.png",
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-3 py-28 dark:bg-dark-gray-3">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14 text-center">
          Testimonials
        </Heading>

        <ul className="flex gap-x-4">
          {testimonials.map((testimonial) => (
            <li key={testimonial.author} className="flex-1">
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
