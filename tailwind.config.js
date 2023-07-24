/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,jsx}",
    "./**/**/*.{js,jsx}",
    "./**/**/**/*.{js,jsx}",
    "./**/**/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#a28557',
      }
    },
  },
  plugins: [],
};
