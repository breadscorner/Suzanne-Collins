/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Prune: '#442222',
        tan: '#81746b',
        Beige: '#aa9999',
        LightOrange: '#ccaa99',
        LightBeige: '#eeddcc',
      },
    },
  },
  plugins: [],
};
