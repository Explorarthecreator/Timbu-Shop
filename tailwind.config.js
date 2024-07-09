/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    themes:["light"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins':["Poppins", "sans-serif"]
    },
    backgroundImage:{
      'header':"url('./images/header.jpg')"
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

