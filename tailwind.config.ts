import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: "#f0f4f9",
          100: "#d9e2f0",
          200: "#b3c5e1",
          300: "#809fcc",
          400: "#4d78b5",
          500: "#2a579a",
          600: "#1d437d",
          700: "#143160",
          800: "#0e2448",
          900: "#0B1F3A",
          950: "#061122",
        },
        rhodium: {
          50: "#F7F8FA",
          100: "#E8ECF1",
          200: "#D3D9E2",
          300: "#B8C2CF",
          400: "#8A97A8",
          500: "#6B7A8D",
          600: "#505E70",
          700: "#3B4756",
          800: "#27303B",
          900: "#182029",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0F766E",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        brass: {
          50: "#faf7ee",
          100: "#f2ebd6",
          200: "#e5d6ae",
          300: "#d4bd80",
          400: "#c4a357",
          500: "#B08D57",
          600: "#987445",
          700: "#7b5a38",
          800: "#654932",
          900: "#543d2c",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        highlight: {
          DEFAULT: "var(--highlight)",
          foreground: "var(--highlight-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(11, 31, 58, 0.05), 0 1px 2px 0 rgba(11, 31, 58, 0.03)",
        card: "0 4px 20px -2px rgba(11, 31, 58, 0.08)",
        "card-hover": "0 10px 30px -4px rgba(11, 31, 58, 0.12)",
        elevation: "0 20px 40px -15px rgba(11, 31, 58, 0.15)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      maxWidth: {
        prose: "68ch",
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
