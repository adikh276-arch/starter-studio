import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        pastel: {
          pink: { DEFAULT: "hsl(var(--pastel-pink))", foreground: "hsl(var(--pastel-pink-fg))" },
          lilac: { DEFAULT: "hsl(var(--pastel-lilac))", foreground: "hsl(var(--pastel-lilac-fg))" },
          slate: { DEFAULT: "hsl(var(--pastel-slate))", foreground: "hsl(var(--pastel-slate-fg))" },
          peach: { DEFAULT: "hsl(var(--pastel-peach))", foreground: "hsl(var(--pastel-peach-fg))" },
          mint: { DEFAULT: "hsl(var(--pastel-mint))", foreground: "hsl(var(--pastel-mint-fg))" },
          blue: { DEFAULT: "hsl(var(--pastel-blue))", foreground: "hsl(var(--pastel-blue-fg))" },
          yellow: { DEFAULT: "hsl(var(--pastel-yellow))", foreground: "hsl(var(--pastel-yellow-fg))" },
          rose: { DEFAULT: "hsl(var(--pastel-rose))", foreground: "hsl(var(--pastel-rose-fg))" },
        },
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },
      backgroundImage: {
        "tip-teal": "var(--tip-teal)",
        "tip-orange": "var(--tip-orange)",
        "tip-pink": "var(--tip-pink)",
        "tip-purple": "var(--tip-purple)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
