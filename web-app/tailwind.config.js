/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',  
      },
      fontFamily: {
        sans: ['Monserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

