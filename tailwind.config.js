/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

