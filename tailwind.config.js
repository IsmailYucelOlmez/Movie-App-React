/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noposter': "url('/src/assets/no-poster.png')",
      },
      fontFamily:{
        "gabarito":['Gabarito', 'sans-serif'],
        "nunito":[ 'Nunito', 'sans-serif'],
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
      },
      height: {
        '128': '32rem',
        '112':'28rem',
      }
    },
    screens: {
      'xs': '320px',
      'sm': '540px',  //max width:540px
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [],
}

