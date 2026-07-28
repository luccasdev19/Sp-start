import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1216",
        surface: {
          1: "#151b20",
          2: "#212a30",
        },
        foreground: {
          DEFAULT: "#ffffff",
          muted: "#b8c2c9",
          subtle: "#8fa0a8",
        },
        border: {
          DEFAULT: "#2a3840",
          strong: "#3a4a54",
        },
        accent: {
          DEFAULT: "#d4a24e",
          muted: "#8a6d3a",
        },
        petrol: {
          DEFAULT: "#0f2b38",
          light: "#1c4356",
        },
        whatsapp: {
          DEFAULT: "#25D366",
        },
        primary: {
          DEFAULT: "#d4a24e",
          foreground: "#0d1216",
        },
        secondary: {
          DEFAULT: "#151b20",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#212a30",
          foreground: "#8fa0a8",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#151b20",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#151b20",
          foreground: "#ffffff",
        },
        input: "#2a3840",
        ring: "#d4a24e",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        card: "12px",
        DEFAULT: "0.625rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
