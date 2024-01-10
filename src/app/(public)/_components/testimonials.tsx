import { getAllTestimonials } from "@/entities/testimonial/fetchers"
import { Heading } from "@/components/ui/heading"
import { TestimonialCard } from "@/components/card/testimonial-card"

export async function Testimonials() {
  const testimonials = await getAllTestimonials({ take: 3 })

  return (
    <section className="bg-gray-3 py-28 dark:bg-dark-gray-3">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14 text-center">
          Testimonials
        </Heading>

        <ul className="flex gap-x-4">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="flex-1">
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
