
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        hacker: {
          red: "#ff2d55",
          dark: "#0f0f0f",
          darker: "#050505",
          gray: "#222222",
          light: "#f3f3f3",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(3px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px 2px rgba(255, 45, 85, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 20px 5px rgba(255, 45, 85, 0.5)"
          },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "matrix-effect": {
          "0%": { 
            textShadow: "0 0 5px #ff2d55, 0 0 10px #ff2d55",
            color: "rgba(255, 45, 85, 0.8)"
          },
          "50%": { 
            textShadow: "0 0 20px #ff2d55, 0 0 30px #ff2d55",
            color: "#ff2d55"
          },
          "100%": { 
            textShadow: "0 0 5px #ff2d55, 0 0 10px #ff2d55",
            color: "rgba(255, 45, 85, 0.8)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-glitch": "text-glitch 0.5s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "pulse-glow": "pulse-glow 3s infinite",
        "typing": "typing 3.5s steps(30, end)",
        "matrix-effect": "matrix-effect 3s infinite",
        "float": "float 5s ease-in-out infinite",
      },
      fontFamily: {
        'code': ['"Fira Code"', 'monospace'],
        'cyber': ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
