import { Header } from "@/components/layout/header"
import { SearchBar } from "@/components/layout/search-bar"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <SearchBar />
      {children}
    </>
  )
}
