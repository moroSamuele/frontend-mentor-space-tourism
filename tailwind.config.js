/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceBlue: "hsl(230, 35%, 7%)",
        milkyMoon: "hsl(231, 77%, 90%)",
      },
      screens: {
        'xs': '375',
        // => @media (max-width: 375px) { ... }
      },
      boxShadow: {
        '3xl': '0 0 0 75px rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
