/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "hsl(209, 23%, 22%)",
          200: " hsl(207, 26%, 17%)",
          300: "hsl(200, 15%, 8%)",
        },
        mentor: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 98%)",
          300: " hsl(0, 0%, 52%)"
        }
      }
    },
  },
  plugins: [],
}