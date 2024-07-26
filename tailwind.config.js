/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default  {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
         
        'band': "url('./src/assets/band.png')",
        'background2': "url('./src/assets/background.jpg')",
        'mapBackground': "url('./src/assets/mapbackground.jpg')",
      },
      backgroundColor:{
          'custom-nav':'rgba(22, 34, 57, 0.95);',
          'custom-foot':'rgba(22, 34, 57, 0.95);',
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


