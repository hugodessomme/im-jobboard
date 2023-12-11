import { Hero } from "./_components/hero"
import { MostPopularJobs } from "./_components/most-popular-jobs"
import { PopularCategories } from "./_components/popular-categories"
import { TopCompanies } from "./_components/top-companies"

export default function HomePage() {
  return (
    <>
      <Hero />
      <MostPopularJobs />
      <PopularCategories />
      <TopCompanies />
    </>
  )
}
