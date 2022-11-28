/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    colors: {
      'blue': '#6CC4DF',
      'red': '#F37062',
      'yellow': '#F8D035',
      'pink': '#C95BA2',
      'orange': '#FAA634',
      'green': '#BDCD44',
      'black': '#231F20',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Esteban', 'serif'],
    },
    extend: {
      fontSize: {
        '2xl': '1.825rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '4rem',
        '6xl': '6.5rem',
        '7xl': '8.5rem',
        '9xl': '9rem',
      },
    }
  },
  safelist: [
    'bg-black',
    'bg-white',
    'bg-blue',
    'bg-red',
    'bg-yellow',
    'bg-pink',
    'bg-orange',
    'bg-green',
    'fill-black',
    'fill-white',
    'fill-blue',
    'fill-red',
    'fill-yellow',
    'fill-pink',
    'fill-orange',
    'fill-green',
    'text-black',
    'text-white',
    'text-blue',
    'text-red',
    'text-yellow',
    'text-pink',
    'text-orange',
    'text-green',
    'noScroll'
  ],
  plugins: [],
}
