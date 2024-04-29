/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        footer: '#333333',
        footerText: '#B9B7BD',
        spanishYellow: '#f39b12',
        spanishYellowLight: '#f6b653',
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}