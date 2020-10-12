
module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: { min: '0px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      red: '#9D2213',
      gray: {
        100: '#f8f8f8',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      minHeight: {

        '1/4-screen': '20vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',

      }, height: {
        '1/2-screen': '50vh',
        '3/4-screen': '75vh'
      }

    },
  },
  corePlugins: {},
  plugins: [],
}