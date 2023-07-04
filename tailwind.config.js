/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#CE15BE',
        'blue': '#3316D1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        helvetica: ['HelveticaNeue MediumExt', 'sans-serif']
      },
    },
  },
  plugins: [],
}
