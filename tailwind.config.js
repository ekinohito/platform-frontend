const defaultTheme = require('tailwindcss/defaultTheme');

const containerScreens = Object.assign({}, defaultTheme.screens);
delete containerScreens['2xl'];

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        primary: '#225AE5',
        secondary: '#225AE5',
        dark: '#1543B7'
      },
      red: '#FD8787',
      gray: '#B9C3DB',
      white: "#ffffff",
      black: "#000000"
    },
    container: {
      center: true,
      screens: containerScreens,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
