/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '360px', max: '767px' },
      // => @media (min-width: 360px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1919px' },
      // => @media (min-width: 1280px and max-width: 1919px) { ... }

      '2xl': { min: '1920px' },
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': ' 0 10px 70px -2px rgba(0, 0, 0, 0.8)',
      },
      
    },
  },
  plugins: [],
};
