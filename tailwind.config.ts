import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E17",
        surface: "#111826",
        surface2: "#161F30",
        line: "#232C3E",
        ink: "#E7ECF5",
        muted: "#8993A6",
        accent: "#D9A441",
        "accent-soft": "#D9A44122",
        teal: "#35A98C",
        "teal-soft": "#35A98C22",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
      },
      keyframes: {
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(53,169,140,0.5)" },
          "70%": { boxShadow: "0 0 0 6px rgba(53,169,140,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(53,169,140,0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        fadeIn: {
          to: { opacity: "1" },
        },
        ping2: {
          "0%": { opacity: "0.7", r: "4" },
          "100%": { opacity: "0", r: "16" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s infinite",
        blink: "blink 1s steps(1) infinite",
        fadeIn: "fadeIn 0.4s forwards",
        ping2: "ping2 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
