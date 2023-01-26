/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clrGold: "#fcd054",
        clrDark: "#070707",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
