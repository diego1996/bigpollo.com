/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E1261C',
        'brand-yellow': '#F7B500',
        'brand-green': '#2E7D32',
        'brand-white': '#FFFFFF',
        'brand-cream': '#FFF7E6',
      },
      fontFamily: {
        'display': ['Fredoka', 'cursive'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}