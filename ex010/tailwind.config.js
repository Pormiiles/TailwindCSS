/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        pumpkin: {
          100: '#FA7921',
          200: '#D26216',
          300: '#AD5013',
          400: '#954611',
        }
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
  safelist: [{pattern: /^.*$/}]
}

