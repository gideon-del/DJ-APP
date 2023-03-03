/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}'],
  theme: {
    extend: {
      colors:{
        primaryBlack:'#222831',
        gray:'#EEEEEE',
        brown:'#B55400',
        secondaryBlack:'#393E46'
      },
      fontFamily:{
        lobster:['Lobster','cursive'],
        courgette:['Courgette','cursive'],
        roboto:['Roboto Condensed','sans-serif']
      }
    },
  },
  plugins: [],
}
