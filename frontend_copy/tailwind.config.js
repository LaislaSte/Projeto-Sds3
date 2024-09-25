/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Montserrat", sans-serif'],
      title: ['"Roboto", sans-serif'],
    },
  },
  plugins: [],
};
