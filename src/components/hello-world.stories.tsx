import type { Meta, StoryObj } from "@storybook/react"

import { HelloWorld } from "./hello-world"

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
}

export default meta
type Story = StoryObj<typeof HelloWorld>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
  render: () => <HelloWorld />,
}
