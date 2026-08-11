import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Custom Brand Colors
        maroon: {
          DEFAULT: "#5E1626",
          light: "#7D1F34",
          dark: "#3F0D18",
        },
        neon: {
          orange: "#FB6241",
          secondary: "#AA3A2F",
        },

        // Adventure Axis — parent brand (amber/gold gradient mark)
        axis: {
          DEFAULT: "#F2A93B",
          gold: "#F2A93B",
          amber: "#EE8B4E",
          ink: "#0E0E10",
          slate: "#191920",
        },

        // Shuffles — hub 1 (maroon + coral)
        shuffles: {
          DEFAULT: "#E8674A",
          maroon: "#5E1626",
          coral: "#E8674A",
        },

        // BayRox — hub 2 (bright tropical multicolor)
        bayrox: {
          DEFAULT: "#E8412E",
          yellow: "#F9D949",
          red: "#E8412E",
          green: "#5FB55A",
          blue: "#3B8FD4",
          orange: "#F08A32",
          cream: "#FFF6E5",
          ink: "#1F2933",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        body: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        headline: ["var(--font-headline)", "sans-serif"],
        display: ["Fredoka", "var(--font-headline)", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
