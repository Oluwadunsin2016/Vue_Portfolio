/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: 'class',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
    textColor:{
    'instagram':'linear-gradient(75deg, yellow,blue, red)'
    }
    },
  },
  plugins: [],
}

