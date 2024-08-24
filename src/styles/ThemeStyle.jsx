const COLORS = {
  black: '#000000',
  gray: {
    100: '#d9d9d9',
    200: '#808080',
  },
  yellow: {
    100: '#ffcf55',
    200: '#cca644',
  },
  brown: {
    100: '#7f6625',
    200: '#4d3e1a',
  },
  white: '#ffffff',
};

const FONT_FAMILY = {
  main: 'Staatliches-Regular',
  pretendard: {
    100: 'Pretendard-Regular',
    200: 'Pretendard-SemiBold',
    300: 'Pretendard-Bold',
    400: 'Pretendard-ExtraBold',
  },
};

const FONT_SIZE = {
  small: '20px',
  medium: '28px',
  large: '36px',
  larger: '64px',
};

const MEDIA = {
  mobile: '@media (max-width:480px)',
  tablet: '@media (max-width: 768px)',
  desktop: '@media (max-width: 1024px)',
};
const theme = {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  MEDIA,
};

export default theme;
