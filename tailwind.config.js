/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        laaliColor: '#EE7139',
      },
      overflow: {
        'inline-x': 'overflow-x hidden',
        'inline-y': 'overflow-y hidden',
      },
    },
  },
  plugins: [],
};
