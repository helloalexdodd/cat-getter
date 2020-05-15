const colors = {
  primary: '#2f833d', // Green
  secondary: '#C1BC78', // Beige
  tertiary: '#205D89', // Blue
  quaternary: '#CF784B', // Rose
  white: '#fcfcfc', // White
  black: '#2C2C2C', // Black
  blackTransparent: `rgba(44, 44, 44, 0.8)`,
  grey: '#7A7265',
};

colors.focus = colors.quaternary;

const fonts = {
  default: "'Open Sans', sans-serif",
  secondary: "'Raleway', sans-serif",
};

const fontWeights = {
  regular: 500,
  light: 300,
  bold: 700,
};

const fontSizes = [
  '0.64rem',
  '0.8rem',
  '1rem',
  '1.563rem',
  '1.953rem',
  '2.441rem',
  '3.052rem'
];

const letterSpacings = {
  sm: '0.5px',
  md: '1px',
};

const lineHeights = {
  sm: '1.65',
  md: '1.95',
};

const breakpoints = ['768px', '992px', '1200px'];

const sizes = {
  maxWidth: '1280px',
};

const borders = [0, '2px solid', '10px solid'];

const radii = {
  button: '5px',
  modal: '2px',
};

const shadows = {
  box: {
    focus: `0 0 2px 2px ${colors.focus}`,
  },
  text: `-0.5px -0.5px 1px ${colors.black}`,
};

export const theme = {
  breakpoints,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  borders,
  sizes,
  shadows,
  radii,
};

export default theme;
