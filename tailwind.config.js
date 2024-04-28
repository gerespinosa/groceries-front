/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#14532D',
      'secondary': '#15803D',
      'tertiary': '#f59e0b',
      'darker': '#78350f',
      'lighter': '#fffbeb',
      'text': '#052E16'
    },
    fontFamily: {
      'comfortaa': ['Comfortaa', 'sans-serif'],
    }
  },
  plugins: [],
}

