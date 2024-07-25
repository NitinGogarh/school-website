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
      height: {
        '112': '112px', // Custom height value
      },
      margin: {
        '-6': '-1.5rem', // Tailwind doesn’t support pixel values directly for negative margin
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


