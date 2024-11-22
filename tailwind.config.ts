import type { Config } from "tailwindcss";
import config from "fast-jsx/tailwind.config";
const { theme, plugins } = config;

export default {
  content: [
    "./node_modules/fast-jsx/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      fontFamily: {
        "sf-pro": ["SF-Pro"],
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-custom": "bounce 10s infinite",
      },
    },
  },
  plugins,
  darkMode: "selector",
} satisfies Config;
