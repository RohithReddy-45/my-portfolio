/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E0E0E',
        secondary: '#3E3E3E',
        bgsecondary: '#F5F5F5',
      },
      screens: {
        xs: '425px',
        ...defaultTheme.screens,
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
    },
  },

  plugins: [],
};
