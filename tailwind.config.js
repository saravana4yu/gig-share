/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        custom: '#646c79',
        b: '#8bb8a3',
        a: '#e5d3a2',
        c: '#4e4e8c',
        d: '#432e2d',
        e: "#1a1a1a",
        g1: "#5f6e66",
        g2: "#5d615f",
        g3: "#8c8f8d"
      },
      fontFamily: {
        'poppins': ['Regulator Nova', 'sans-serif'],
        'poppin': ['Regulator', 'sans-serif'],
        'josefin-sans': ['Outfit', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
