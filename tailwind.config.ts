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
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          50: "#fdfcfa",
          100: "#faf7f2",
          200: "#f5f0e8",
          300: "#e8dfd3",
          400: "#d4c7b5",
          500: "#b8a68e",
          600: "#8b7355",
          700: "#6b5940",
          800: "#5c4a32",
          900: "#2c2418",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
