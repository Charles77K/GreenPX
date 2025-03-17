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
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        scrollVertical:
          "scrollVertical var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        scrollVertical: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
