/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [],
}
