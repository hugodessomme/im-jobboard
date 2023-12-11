import { Heading } from "@/components/ui/heading"
import { CompanyCard } from "@/components/card/company-card"

// TODO: query real data
const companies = [
  {
    label: "Apple",
    city: "Cupertino",
    country: "USA",
    jobs: 3,
  },
  {
    label: "Sony",
    city: "Tokyo",
    country: "Japan",
    jobs: 5,
  },
  {
    label: "Google",
    city: "Mountain View",
    country: "USA",
    jobs: 13,
  },
  {
    label: "Tesla",
    city: "Palo Alto",
    country: "USA",
    jobs: 1,
  },
  {
    label: "Samsung",
    city: "Seoul",
    country: "South Korea",
    jobs: 27,
  },
  {
    label: "L'Oréal",
    city: "Paris",
    country: "France",
    jobs: 8,
  },
]

export function TopCompanies() {
  return (
    <section className="bg-gray-1 py-28 dark:bg-dark-gray-1">
      <div className="container">
        <Heading as="h2" size="2" className="mb-14">
          Top Companies
        </Heading>

        <ul className="grid grid-cols-3 gap-4">
          {/* TODO: replace key by id */}
          {companies.map((company) => (
            <li key={company.label}>
              <CompanyCard company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
