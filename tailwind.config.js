/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
   fontFamily: { madefor: ['"Madefor Text"', 'serif'] },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

