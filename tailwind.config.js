/** @type {import('tailwindcss').Config} */
module.exports = {
  // Sabse zaroori: Tailwind ko batayein ki dark mode 'class' strategy par chalega
  darkMode: 'class',
  // Un sabhi files ka path dein jahan aap Tailwind classes use kar rahe hain
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}