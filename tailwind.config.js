/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  theme: {
    screens:{
      sm:'480px',
      md:'760px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        strongCyan:'hsl(171,66%,44%)',
        lightBlue:'hsl(233,100%,69%)',
        darkGrayishBlue:'hsl(210,10%,33%)',
        grayishBlue:'hsl(201,11%,66%)'
      }
    },
    fontFamily:{
      sans:['Bai Jamjuree','sans-serif'],
    }
  },
  plugins: [],
}
