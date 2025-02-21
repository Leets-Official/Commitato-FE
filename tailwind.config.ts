/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#d9d9d9',
          200: '#808080',
          300: '#ececec',
        },
        yellow: {
          100: '#ffcf55',
          200: '#cca644',
          300: '#FFEBB7',
          400: '#FFDF8D',
        },
        brown: {
          100: '#7f6625',
          200: '#4d3e1a',
        },
        primary: '#FFCF55',
        grey: '#808080',
        lightGray: '#D9D9D9',
        thickBrown: '#4D3E1A',
        lightBrown: '#CCA644',
      },
      fontFamily: {
        Regular: ['Pretendard-Regular', 'sans-serif'],
        SemiBold: ['Pretendard-SemiBold', 'sans-serif'],
        Bold: ['Pretendard-Bold', 'sans-serif'],
        ExtraBold: ['Pretendard-ExtraBold', 'sans-serif'],
        staatliches: ['Staatliches-Regular', 'cursive'],
      },
      fontSize: {
        small: '20px',
        medium: '28px',
        large: '36px',
        larger: '64px',
        header: '48px',
        captionHeader: '36px',
        body: '24px',
        captionBody: '18px',
        assistive: '16px',
        button: '13px',
      },
      screens: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
      },
    },
  },
  plugins: [],
};
