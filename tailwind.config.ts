import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          subtle: "var(--color-ink-subtle)",
        },
        paper: {
          DEFAULT: "var(--color-paper)",
          elevated: "var(--color-paper-elevated)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-tight)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-tight)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-tight)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        h4: ["var(--text-h4)", { lineHeight: "var(--leading-snug)" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--leading-relaxed)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-normal)" }],
        small: ["var(--text-small)", { lineHeight: "var(--leading-normal)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-normal)" }],
      },
      spacing: {
        "section": "var(--section-gap)",
        "block": "var(--block-gap)",
        "gutter": "var(--gutter)",
        "nav": "var(--nav-height)",
      },
      maxWidth: {
        "container-narrow": "var(--container-narrow)",
        "container-default": "var(--container-default)",
        "container-wide": "var(--container-wide)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "in-out": "var(--ease-in-out)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
