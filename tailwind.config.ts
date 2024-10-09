import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        button: "#2B2B2B",
        lightBackground: "#FCFCFC",
        lightText: "#595959",
        lightFirst: "#FFB568",
        lightTitle: "#2E2E2E",
        lightBorder: "#F0F0F0",
        darkBackground: "#1F1F1F",
        darkText: "#BFBFBF",
        darkFirst: "#EFBE8A",
        darkTitle: "#F2F2F2",
        darkBorder: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
