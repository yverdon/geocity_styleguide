module.exports = {
  purge: {
    content: ['./components/**/*.nunj'],
    options: {},
  },
  theme: {
    fontFamily: {
      heading: 'Roboto',
      body: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      sm: '.875rem', // 14px
      base: '1.125rem', // 18px
      lead: '1.375rem', // 22px
      md: '1.5625rem', // 25px
      lg: '2.4375rem', // 39px
      xl: '3.0625rem', // 49px
      '2xl': '3.75rem', // 60px
    },
    colors: {
      brand: {
        default: '#008C6F',
      },
      gray: {
        100: '#F1F4F8',
        200: '#BDC0C1',
        300: '#A3A7A8',
        400: '#898E90',
        500: '#6F7476',
        600: '#575A5c',
        700: '#3E4142',
        800: '#252727',
        900: '#0C0D0D',
      },
    },
  },
  variants: {},
  plugins: [],
};
