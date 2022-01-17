module.exports = {
  corePlugins: { preflight: false },
  content: ['./components/**/*.nunj'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
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
      transparent: {
        DEFAULT: 'transparent',
      },
      brand: {
        light: '#53c2a3',
        DEFAULT: '#008C6F',
        dark: '#007f75',
      },
      negative: {
        DEFAULT: '#fff',
      },
      gray: {
        100: '#F1F4F8',
        200: '#D8DBDF',
        300: '#A3A7A8',
        400: '#898E90',
        500: '#6F7476',
        600: '#575A5c',
        700: '#3E4142',
        800: '#252727',
        900: '#0C0D0D',
      },
    },
    boxShadow: {
      outline: '0 0 0 0.2rem rgba(83, 194, 163, 0.5)',
      focus: '0 0 0 0.2rem rgba(83, 194, 163, 0.5)',
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
