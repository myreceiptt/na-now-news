import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-now": "#E2E2E2",
        "dark-now": "#171717",
        "yellow-now": "#FBB22D",
        "green-now": "#36A749",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        judul: ["var(--font-judul)"],
      },
    },
  },
  plugins: [],
};
export default config;
