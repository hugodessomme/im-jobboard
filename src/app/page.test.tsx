import { render, screen } from "@testing-library/react"

import Page from "@/app/page"

describe("Home", () => {
  it("says hello", () => {
    render(<Page />)

    const heading = screen.getByRole("heading", { name: /hello world/i })

    expect(heading).toBeInTheDocument()
  })
})
