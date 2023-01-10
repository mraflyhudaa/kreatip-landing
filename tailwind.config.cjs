/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kreatip: '#040D21',
        primary: '#502DD8',
        secondary: '#C30195',
      },
      margin: {
        7.5: '1.875rem' /* 30px */,
        13: '3.125rem' /* 50px */,
        15: '3.75rem' /* 60px */,
        23: '5.75rem' /* 92px */,
        29: '7.313rem' /* 117px */,
      },
      padding: {
        13: '3.125rem' /* 50px */,
        17: '4.25rem' /* 68px */,
        19: '4.688rem' /* 75px */,
        18: '4.375rem' /* 70px */,
        23: '5.75rem' /* 92px */,
      },
      gap: {
        35: '8.875rem' /* 142px */,
      },
    },
  },
  plugins: [],
};
