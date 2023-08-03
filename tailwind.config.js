/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mob': {'max': '750px'},
      'smlap': {'max': '1024px'},
      'revsmlap': '1024px'
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

