/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        background: {
          light: "#f6f6f8",
          dark: "#181824",
        },
        primary: {
          light: "#FFFFFF",
          dark: "#25273c" 
        },
      }
    },
  },
  darkMode: "class",
  plugins: [],
}