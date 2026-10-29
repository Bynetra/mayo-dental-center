import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fbfd",
          100: "#e0f6fb",
          200: "#b8ebf6",
          300: "#7fd9ee",
          400: "#3cc2e2",
          500: "#0aabcb", // Lucida signature vibrant teal
          600: "#0789a4", // Lucida deep teal (>5:1 contrast on white)
          700: "#066e85",
          800: "#09586a",
          900: "#0d4a58",
          950: "#05303a",
        },
        lucidaGreen: {
          50: "#f6fbf0",
          100: "#eaf6dd",
          200: "#d5eebd",
          300: "#b8e192",
          400: "#9ad065",
          500: "#8dc63f", // Lucida signature vibrant green
          600: "#6fa52b", // Lucida deep green
          700: "#547f23",
          800: "#446420",
          900: "#3a541e",
          950: "#1d2e0c",
        },
        navy: {
          50: "#f4f8fa", // Lucida mist
          100: "#e3ecf0", // Lucida line
          200: "#c8d9e2",
          300: "#9fbccc",
          400: "#6e99b0",
          500: "#4b7a94",
          600: "#3d5160", // Lucida ink-soft
          700: "#2d4251",
          800: "#1a2f3f",
          900: "#0e1f2c", // Lucida deep ink
          950: "#08131c",
        },
        accent: {
          50: "#f6fbf0",
          100: "#eaf6dd",
          200: "#d5eebd",
          300: "#b8e192",
          400: "#9ad065",
          500: "#8dc63f", // Lucida brand green as accent
          600: "#6fa52b",
          700: "#547f23",
        },
        emergency: {
          DEFAULT: "#dc2626",
          dark: "#b91c1c",
          light: "#fee2e2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(10, 171, 203, 0.08), 0 1px 3px rgba(14, 31, 44, 0.04)",
        card: "0 10px 25px -5px rgba(14, 31, 44, 0.05), 0 8px 10px -6px rgba(14, 31, 44, 0.02)",
        lift: "0 20px 35px -10px rgba(10, 171, 203, 0.18), 0 4px 6px -2px rgba(14, 31, 44, 0.04)",
        glass: "0 8px 32px 0 rgba(14, 31, 44, 0.08)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(0.98)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
