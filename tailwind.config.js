/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        surface: "#111827",
        elevated: "#172033",
        primary: "#0F766E",
        primaryLight: "#14B8A6",
        accent: "#F59E0B",
        text: "#E5E7EB",
        muted: "#94A3B8",
      },
    },
  },
  plugins: [],
};
