/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        cosmic: {
          black: "#000000",
          purple: "#6600cc",
          pink: "#ff0066",
          blue: "#0066ff",
          cyan: "#00ffff",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
        "cosmic-gradient": "linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #4d0099 75%, #6600cc 100%)",
      },
    },
  },
  plugins: [],
};
