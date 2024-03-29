/** @type {import('tailwindcss').Config} */

const borderRadius = require('./themes/borderRadius');
const fontSize = require('./themes/fontSizes');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '480px' },
        tablet: { min: '481px', max: '1024px' },
        desktop: { min: '1025px' }
      },
      colors: {
        bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)'
      },
      borderRadius,
      fontSize,
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      width: {
        352: '352px'
      },
      margin: {
        '5px': '5px'
      },
      boxShadow: {
        mediumBlur: '0px 4px 24px rgba(0, 0, 0, 0.1)',
        dropdownShadow: '0px 4px 24px rgba(10, 31, 68, 0.1)',
        borderShadow: '0px 4px 40px -2px rgba(65, 105, 184, 0.04)'
      },
      fontFamily: {
        inter: ['Inter']
      }
    }
  },
  plugins: []
};
