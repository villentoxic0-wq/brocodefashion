/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: '#080808',
        brandGray: '#151515',
        brandWhite: '#f5f5f5',
        brandRed: '#e50914',
        brandNeon: '#3cff5f',
      },
      boxShadow: {
        premium: '0 30px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, rgba(233, 9, 20, 0.16), rgba(255, 255, 255, 0.02))',
      },
    },
  },
  plugins: [],
};
