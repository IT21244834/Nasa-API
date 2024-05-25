/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {

        'mrp': 'url("../assets/Mars2.jpg")'

      },

      fontFamily: {

        sans: [ 'Roboto', 'sans-serif' ],

      },
    },
  },
  plugins: [],
}
