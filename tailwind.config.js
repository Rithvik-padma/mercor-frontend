/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mob': {'max': '750px'},
      'smlap': {'max': '1200px'},
      'revsmlap': '1200px',
      'mdlap': {'max': '1300px'}
    },
    extend: {
      fontFamily:{
        'Agrandir': ['Agrandir'],
        'Mulish': ['Mulish'],
      }
    },
  },
  plugins: [],
}

