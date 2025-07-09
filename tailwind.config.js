/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        chewy: ['Chewy', 'cursive'],
        bubblegum: ['Bubblegum Sans', 'cursive'],  // added here
      },
    },
  },
};
