import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx", "./*.ts"],
  darkMode: ["class", '[data-theme="dark"]'],
  important: true,
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }],
      "3.5xl": ["1.875rem", { lineHeight: "2.375rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "4.5xl": ["2.25rem", { lineHeight: "2.75rem" }],
      "5xl": ["2.5rem", { lineHeight: "3rem" }],
      "6xl": ["3rem", { lineHeight: "3.5rem" }],
      "7xl": ["4rem", { lineHeight: "4.5rem" }],
    },
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "pricing-page-bg": "url('/img/pricing-page-bg.png')",
      },
      animation: {
        "infinite-scroll": "scrollLeft 20s linear infinite",

        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: [
          ["Inter", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      // fontFamily: {
      //   sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
      //   display: [
      //     ["Mona Sans", ...defaultTheme.fontFamily.sans],
      //     { fontVariationSettings: '"wdth" 125' },
      //   ],
      // },
      colors: {
        "mf-stack-purple-light": "#3A33BB",
        "mf-stack-purple-primary": "#7F56D9",
        "mf-stack-purple-dark": "#42307D",
        "mf-stack-purple-ultra-light": "#F9F5FF",
        "mf-stack-purple-very-light": "#E9D7FE",
        "mf-stack-purple-utility-500": "#645BFF",
        "mf-stack-blue-dark": "#1B1677",
        "mf-stack-blue": "#292399",
        "mf-stack-brand-button": "#4E45DD",
        "mf-stack-gray-primary": "#FAFAFA",
        "mf-stack-gray-light": "#535862",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".twp", {
        except: ".no-twp",
      }),
    }),
  ],
} satisfies Config;
