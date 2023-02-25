/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
    },
    extend: {
      colors: {
        teal: '#2f6c6d',
        hummingBird: '#d1f1ee',
        yellow: '#e4d63b',
        solitude: '#e9e9ea',
        gray: '#4b4b4c',
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [],
};
