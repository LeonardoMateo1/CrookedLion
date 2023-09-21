import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xs': '0.75rem', // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5.625rem', // 90px
    },
    extend: {
      fontFamily: {
        "clash" : ["ClashDisplay", "sans"]
      },
      colors: {
        "bg" : "#272727",
        "primary" : "#FFFFFF",
        "secondary" : "#A6A6A6",
        "accent" : "#00AF1C",
        "colm" : "#002C07",
        "colm2" : "#004B0C",
        "colm3" : "#007212",
        "colm4" : "#009518",
        "colm5" : "#00C21F",
        "colm6" : "#06FF2E",
      },
    },
  },
  plugins: [],
}
export default config
