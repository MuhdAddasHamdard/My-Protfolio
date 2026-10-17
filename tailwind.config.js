/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        "navy-deep": "#080D18",
        surface: "#111827",
        teal: "#0F766E",
        "teal-deep": "#115E59",
        "teal-dark": "#134E4A",
        accent: "#5EEAD4",
        ink: "#E5E7EB",
        muted: "#94A3B8",
        subtle: "#F8FAFC",
        "nav-link": "#CBD5E1",
        line: "rgba(255,255,255,0.06)",
        "line-soft": "rgba(255,255,255,0.05)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },

      boxShadow: {
        card: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 20px 60px -15px rgba(2, 6, 23, 0.7)",
        "card-lg": "inset 0 1px 0 0 rgba(255,255,255,0.07), 0 30px 80px -20px rgba(2, 6, 23, 0.85)",
        glow: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 40px -10px rgba(94, 234, 212, 0.35)",
        "glow-soft": "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 10px 55px -18px rgba(15, 118, 110, 0.55)",
        hover: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 24px 70px -20px rgba(15, 118, 110, 0.3)",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },

      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};