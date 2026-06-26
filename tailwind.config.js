/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'threadvault-black': '#0B0B0B',
        'threadvault-gray': '#1D1D1D',
        'threadvault-gold': '#D4AF37',
        'threadvault-blue': '#3A86FF',
        'threadvault-light': '#F5F5F5',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
