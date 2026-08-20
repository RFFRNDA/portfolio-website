import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#0c1621",
        "warm-base": "#e0e3d9",
        "accent-orange": "#c85314",
        "text-on-dark": "#f3f4f0",
        "text-on-dark-secondary": "#57626f",
        "text-on-warm-secondary": "#445569",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
      zIndex: {
        base: "0",
        "sticky-nav": "100",
        overlay: "200",
        modal: "300",
        toast: "500",
      },
    },
  },
  plugins: [],
} satisfies Config;
