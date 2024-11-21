/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['"Poppins"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "red" : "#ff7a7a",
        "green" : " #38cc8c",
        "blue" : "#6055a5",
        "darkBlue" : "#3e3c49",
        "gray" : "#b9b6d3",
      },
      backgroundImage : {
        'mobile' : "url('src/assets/bg-intro-mobile.png')",
        'desktop' : "url('src/assets/bg-intro-desktop.png')",
      }
    },
  },
  plugins: [],
}