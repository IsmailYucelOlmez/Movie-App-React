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
        'noresult':"url('/src/assets/noresult.jpg')",
      },
      fontFamily:{
        "gabarito":['Gabarito', 'sans-serif'],
        "nunito":[ 'Nunito', 'sans-serif'],
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
      },
      height: {
        '160':'40rem',
        '150':'37.5rem',
        '128': '32rem',
        '112':'28rem',
        '88':'22rem',
      },
      width:{
        '100':'25rem',
      },
      minWidth: {
        '1/5': '20%',
      },
      inset: {
        '2/5':'40%'
      },
    },
    screens: {
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

