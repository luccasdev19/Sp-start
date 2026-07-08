import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: {
          1: "#1a1a1a",
          2: "#2a2a2a",
        },
        foreground: {
          DEFAULT: "#ffffff",
          muted: "#a0a0a0",
          subtle: "#8a8a8a",
        },
        border: {
          DEFAULT: "#2a2a2a",
        },
        // TODO: accent color ainda em aberto (avaliar azul-acinzentado
        // ou outra opcao alem do verde do whatsapp)
        accent: {
          DEFAULT: "#4b7bab",
        },
        whatsapp: {
          DEFAULT: "#25D366",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
