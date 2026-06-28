import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#2563EB',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          foreground: '#A1A1AA',
        },
        card: {
          DEFAULT: '#18181B',
          foreground: '#FFFFFF',
        },
        border: '#27272A',
      },
      borderRadius: {
        'xl': '1rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config