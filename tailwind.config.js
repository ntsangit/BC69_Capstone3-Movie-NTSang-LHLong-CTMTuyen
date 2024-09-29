/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize:{
        10: '10px',
        16: '16px',
        20: '20px',
        30: '30px',
        36: '36px'
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      spacing: {
        10:  '10px',
        20:  '20px',
        30:  '30px',
        40:  '40px',
      }
    },
  },
  plugins: [],
}