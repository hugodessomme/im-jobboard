import { Separator } from "@/components/ui/separator"

import { FeaturedJobs } from "./_components/featured-jobs"
import { Hero } from "./_components/hero"
import { HowItWorks } from "./_components/how-it-works"
import { MostPopularJobs } from "./_components/most-popular-jobs"
import { PopularCategories } from "./_components/popular-categories"
import { Testimonials } from "./_components/testimonials"
import { TopCompanies } from "./_components/top-companies"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MostPopularJobs />
      <HowItWorks />
      <PopularCategories />
      <Separator />
      <FeaturedJobs />
      <TopCompanies />
      <Testimonials />
    </>
  )
}
