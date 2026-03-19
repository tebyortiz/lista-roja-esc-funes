/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        roja: {
          900: '#3f0000',
          800: '#5f0303',
          700: '#8a1010',
          600: '#bf1b1b',
          500: '#e23a3a',
          50:  '#fff7f2',
        },
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        reveal: 'reveal 0.7s ease both',
      },
      keyframes: {
        reveal: {
          from: { transform: 'translateY(12px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

