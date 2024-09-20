import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Nunito', 'sans-serif'],
        parrafo: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#9FCB38',
          50: '#FAFCF5',
          100: '#F5FAEB',
          200: '#E7F2CD',
          300: '#D9EAAF',
          400: '#BCDB74',
          500: '#9FCB38',
          600: '#8FB732',
          700: '#5F7A22',
          800: '#485B19',
          900: '#303D11',
        },
        secondary: {
          DEFAULT: '#D36802',
          50: '#FDF7F2',
          100: '#FBF0E6',
          200: '#F4D9C0',
          300: '#EDC39A',
          400: '#E0954E',
          500: '#D36802',
          600: '#BE5E02',
          700: '#7F3E01',
          800: '#5F2F01',
          900: '#3F1F01',
        },
        whiteBackgroundForm: '#f6f6f6',
        whiteBackgraundForm2: '#FFFFFF',
        marronCustom: 'var(--marron-custom)',
        greenCustom: 'var(--green-custom)',
        greenCustom2: 'var(--green-custom2)',
        oranjeCustom: 'var(--oranje-custom)',
        blackCustom: 'var(--black-custom)',
        lightBrownCustom: 'var(--lightBrown-custom)',
        greyCustom: '#909090',
      },
      maxWidth: {
        rem14: '14rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonBase': {
          background: '#f8f9fa',
          boxShadow: '3px 3px 3px #729228, -3px -3px 3px  #ccff48',
          color: 'var(--green-custom2)',
          border: '1px solid var(--white-custom1)',
          borderRadius: '30px',
          transition: 'all .2s linear',
          padding: '8px 25px',
          '&:hover': {
            background: 'linear-gradient(145deg, #e26f02, #be5e02)',
            boxShadow: '3px 3px 3px #a75202, -3px -3px 3px #ff7e02',
            color: 'var(--white-custom1)',
            border: '1px solid var(--oranje-custom)',
          },
        },
      });
    }),
  ],
};
