/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'dark-gray': '#28272a',
        'electric-blue': '#00f0ff',
        'neon-green': '#39ff14',
        'burning-red': '#ff2800',
        'sage-green': '#9ca98f',
        'mocha': '#967e76',
        'terracotta': '#cd5700',
        'silver': '#c0c0c0',
        'metallic': '#b8b8b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}