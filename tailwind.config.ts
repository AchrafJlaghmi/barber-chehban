import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9933A",
          dark: "#a67324",
          light: "#E4BA68",
        },
        dark: {
          DEFAULT: "#0D0D0D",
          pure: "#000000",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#262626",
        },
        cream: {
          DEFAULT: "#F5EFE0",
          muted: "#A39E93",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
