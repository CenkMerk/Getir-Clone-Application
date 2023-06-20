/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary:"#5d3ebc",
        brandYellow: "#ffd300"
      },
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.25rem',
      }
    },
  },
  plugins: [],
}