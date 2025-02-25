import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxl: "1.75rem",
      },
      textDecorationOffset: {
        2: "2px",
      },
      colors: {
        // Light Mode //
        backgroundLight: "#D9D9D9",
        textLight: "#E9EAE4",
        cardBgLight: "#D64D0C",
        cardBgLightAlt: "#F28C5A",
        linkLight: "#ECEDFD",
        backgroundLightAlt: "#B5D3B0",

        // Dark Mode //
        backgroundDark: "#D9D9D9",
        textDark: "#e5e7eb",
        cardBgDark: "#1f2937",
        linkDark: "#3b82f6",
      },
    },
  },
  plugins: [],
};

export default config;
