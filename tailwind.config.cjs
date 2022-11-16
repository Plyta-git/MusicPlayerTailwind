/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  mode: "jit",
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
    },
      dropShadow: {
        'glow': '0px 0px 7px #2dffc4dd',
      },
      colors: {
        b_primary: "#1b1c22",
        b_secondary: "#191a1f",
        b_black: "#0f0f10",
        b_front: "#23242a",
        primary: "#2dffc4",
        secondary: "#606164",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [

]
};