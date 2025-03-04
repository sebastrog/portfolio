/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'], // Agrega soporte para data-theme
  content: ["./index.html", "./assets/css/*.css"], // Asegúrate de incluir el CSS
  theme: {
    extend: {},
  },
  plugins: [],
};
