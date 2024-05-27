/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
// enable dark mode variants
  darkMode:'media',
}



