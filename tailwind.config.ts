import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: "#A46447",
        wine: "#4C2632",
        mahogany: "#5A3E35",
        sage: "#7F8B72",
        almond: "#CEB59E",
        clay: "#C98B6E",
        ivory: "#F3ECE3",
        pearl: "#D6CFC5",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-display)", "serif"],
        sans: ["var(--font-noto-sans)", "sans-serif"],
        mono: ["var(--font-noto-sans-mono)", "monospace"],
      },
      borderRadius: {
        bvvg: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
