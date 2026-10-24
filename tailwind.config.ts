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
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0f766e", // Deep brand medical teal (>5.5:1 contrast with white)
          700: "#115e59", // Action teal
          800: "#134e4a",
          900: "#042f2e",
          950: "#021c1b",
        },
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a", // Deep text / headings
          950: "#090e1a", // Footer / heavy contrast
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        emergency: {
          DEFAULT: "#dc2626",
          dark: "#b91c1c",
          light: "#fee2e2",
        }
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
        soft: "0 2px 10px -2px rgba(13, 148, 136, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)",
        card: "0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.02)",
        lift: "0 20px 35px -10px rgba(13, 148, 136, 0.15), 0 4px 6px -2px rgba(15, 23, 42, 0.04)",
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.08)",
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
