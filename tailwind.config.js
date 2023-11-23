/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: {
          1: "rgb(var(--color-accent-1) / <alpha-value>)",
          2: "rgb(var(--color-accent-2) / <alpha-value>)",
        },
        technologies: {
          react: "rgb(20,158,202)",
          typescript: "rgb(49,120,198)",
          javascript: "rgb(247,224,24)",
          reactquery: "rgb(255,65,84)",
          redux: "rgb(118,74,188)",
          chakraui: "rgb(94,201,202)",
          html: "rgb(228,77,38)",
          css: "rgb(33,76,229)",
          tailwindcss: "rgb(28,172,186)",
          reacttestinglibrary: "rgb(228,54,53)",
          jest: "rgb(44,200,42)",
          python: "rgb(66,128,178)",
          mysql: "rgb(24,90,102)",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 6s linear infinite",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
