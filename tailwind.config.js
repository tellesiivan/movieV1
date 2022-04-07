const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    main: {
      nav: "#3f3f3f70",
    },
  },
  plugins: [],
};
