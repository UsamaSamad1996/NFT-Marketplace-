/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work-Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('Images/purple.png')",
      },
    },
  },
  plugins: [],
};
