const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      colors: {
        primary: "#30323d",
        secondary: "#fdf0d5",
        accent: "#b02c6e",
      },
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["bebas-neue-pro", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
