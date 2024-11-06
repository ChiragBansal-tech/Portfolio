/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange1: '#FD6F00',
        blue1: '#000599', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #000000 90%, #FD6F00 110%)',
      },
    },
  },
  plugins: [],
}
