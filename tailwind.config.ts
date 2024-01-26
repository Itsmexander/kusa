import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          "primary": "#006C67",
          "secondary": "#B2BB1C",
          "bg-base": "#EDEDED"
      }
    },
  },
  plugins: [],
} satisfies Config;
