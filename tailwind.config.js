/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        chewy: ["Chewy", "cursive"],
        bubblegum: ["Bubblegum Sans", "cursive"], // added here
      },
    },
  },
};
