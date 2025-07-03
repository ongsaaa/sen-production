/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
        header: ['Archivo', 'sans-serif'],
      },
      // New animation for a slower, more subtle pulse
      animation: {
        'subtle-pulse': 'subtle-pulse 6s ease-in-out infinite',
      },
      // New keyframes for the subtle pulse effect
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}