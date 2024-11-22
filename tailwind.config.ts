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
    },
  },
  plugins,
  darkMode: "selector",
} satisfies Config;
