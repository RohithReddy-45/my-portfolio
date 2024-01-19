/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
        loader: 'jump 0.9s infinite',
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

        jump: {
          '10%, 90%': {
            transform: 'translate(0,0) scaleX(1.1) scaleY(0.8)',
          },
          '50%': {
            backgroundImage: 'url(./assets/bunny-jump.png)',
            transform: 'translate(0,-60px) scaleX(0.9) scaleY(1.2)',
          },
        },
      },
    },
  },

  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
};
