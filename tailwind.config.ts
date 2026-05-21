import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0A0A0A",
          charcoal: "#121212",
          gold: "#C59D1E",
          "gold-light": "#D4AF37",
          "gold-dark": "#9A7A16",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.25) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(193, 154, 59, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(193, 154, 59, 0.2)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(193, 154, 59, 0.35)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
