/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F6890",
        secondary: "#F9E190",
        secondaryDark: "#334262",
        secondaryLight: "#D8E2F0",
        alertRed: "#FF1D1D",
        alertGreen: "#15BE77",
        alertBlue: "#2965FE",
        border: "#4A4A4A",
        disabled: "#cac9c975"
      },
      fontFamily: {
        sans: ["quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
});
