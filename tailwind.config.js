/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBackground: "#fafafa",
        lightText: "#111517",
        lightInput: "#858585",
        darkBackground: "#202c37",
        darkElements: "#2b3945",
      },
    },
  },
  plugins: [],
};
