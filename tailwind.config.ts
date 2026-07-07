import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dce8ff",
          200: "#b8d0ff",
          300: "#8bb0ff",
          400: "#5c8cff",
          500: "#2f63f6", // primary blue accent
          600: "#1f4bd8",
          700: "#1a3cae",
          800: "#18318a",
          900: "#172a6e",
        },
        ink: {
          950: "#0a0a0c",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(10, 10, 12, 0.04), 0 8px 24px rgba(10, 10, 12, 0.06)",
        card: "0 1px 2px rgba(10,10,12,0.04), 0 12px 32px -12px rgba(10,10,12,0.12)",
        "card-hover":
          "0 4px 12px rgba(10,10,12,0.06), 0 24px 48px -16px rgba(10,10,12,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
