/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kreatip: '#040D21',
      },
      margin: {
        13: '3.125rem' /* 50px */,
      },
      padding: {
        13: '3.125rem' /* 50px */,
        19: '4.688rem' /* 75px */,
      },
      gap: {
        35: '8.875rem' /* 142px */,
      },
    },
  },
  plugins: [],
};
