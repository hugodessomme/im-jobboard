import * as radixColors from "@radix-ui/colors"
import { type Config } from "tailwindcss"
import * as colors from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"

function generateColorScale(scale: Record<string, string>, prefix: string) {
  const arrByStep = Object.entries(scale).map((color) => {
    const step = color[0].replace(prefix, "")
    const value = color[1]

    return { [step]: value }
  })

  const output = arrByStep.reduce(
    (target, source) => Object.assign(target, source),
    {}
  )

  return output
}

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      blue: generateColorScale(radixColors.blue, "blue"),
      "dark-blue": generateColorScale(radixColors.blueDark, "blue"),
      gray: generateColorScale(radixColors.gray, "gray"),
      "dark-gray": generateColorScale(radixColors.grayDark, "gray"),
      red: generateColorScale(radixColors.red, "red"),
      "dark-red": generateColorScale(radixColors.redDark, "red"),
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
