/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#FB2E86',
        primaryRed: '#F92545',
        primaryBlue: '#2E19C4',
        primaryNavyBlue: '#151875',
        primaryPurple: '#7E33E0',
        primarySkyBlue: '#F2F5FF',
        primaryPantonePurple: '#e7e4f8',
        secondaryNavyBlue: '#2A3BA8',
        secondaryBlue: '#151875',
        secondaryPurple: '#9F64B4',
        ternaryBlue: '#0BA7D6',
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        lato: ['Lato'],
      },
      animation: {
        expand: 'expand .7s ease-in-out forwards',
        move: 'move .7s ease-in-out forwards',
        scaling: 'scaling 25s ease infinite',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        move: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaling: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};
