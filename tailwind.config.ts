import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandGreen: "#038B00",
        brandOrange: "#FFD761",
        brandGray: "#5E5E5E",
        brandFadeBlue: "#F0FDFF",
        brandFadeGreen: "#9DFF9C",
        brandFadeGray: "#F5F5F5",
        brandBlack: "#061606",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "horizontal-scroll":
          "scrollHorizontal var(--animation-duration, duration) var(--animation-direction, forwards) linear infinite",
        "vertical-scroll":
          "scrollVertical var(--animation-duration, duration) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scrollHorizontal: {
          to: {
            transform: "translateX(-50%)",
          },
        },
        scrollVertical: {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
