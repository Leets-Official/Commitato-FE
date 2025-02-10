/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        staatliches: ['Staatliches', 'cursive'],
      },
      colors: {
        primary: '#FFCF55',
        grey: '#808080',
        lightGray: '#D9D9D9',
        brown: '#7F6625',
        yellow: '#FFBA07', //추가된 색상
        thickBrown: '#4D3EIA', //HOW 두번째
        lightBrown: '#CCA644', //HOW 세번째
      },
    },
  },
  plugins: [],
};
