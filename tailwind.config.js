/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)'
      },  
    },
  },
  plugins: [],
};
