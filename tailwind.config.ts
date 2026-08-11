import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — see Section 3 of the build brief.
        slate: {
          DEFAULT: "#1C2B3A", // primary dark
          mid: "#3D5A73", // secondary text / subtle UI
        },
        warmwhite: "#FAFAF8", // primary background
        stone: {
          DEFAULT: "#F2EDE6", // secondary background / cards
          border: "#E0D8CF", // hairline dividers and borders
        },
        terracotta: {
          DEFAULT: "#C4602A", // single accent colour
          hover: "#A94F20", // darker accent for hover
        },
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font CSS variables.
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch", // ~65-75 character line length for body copy
        content: "1200px",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 300ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
