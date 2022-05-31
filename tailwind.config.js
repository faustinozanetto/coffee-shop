const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
};
