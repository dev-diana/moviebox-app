/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'main': 'League Spartan, sans-serif',
    },
    extend: {
      backgroundImage : {
        "headerImg" : "url('/src/assets/header.png')"
        }
     },
  },
  plugins: [],
}

