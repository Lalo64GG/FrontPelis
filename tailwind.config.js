/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: {
        aero: '#7CB9E8',
        vista: '#0091C9',
        purpureus: '#800080',
      },
      fontFamily: {
        'x': ["'Just Another Hand', cursive"]
      }
    },
  },
  plugins: [require("daisyui", "'@tailwindcss/forms'")],
}
