const colors = {
  primary: '#2f833d', // Green
  secondary: '#C1BC78', // Beige
  tertiary: '#205D89', // Blue
  quaternary: '#CF784B', // Rose
  white: '#fcfcfc', // White
  black: '#2C2C2C', // Black
  blackTransparent: 'rgba(44, 44, 44, 0.8)',
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
  '3.052rem',
];

const breakpoints = ['768px', '992px'];

const sizes = {
  maxWidth: '1100px',
};

const borders = [0, '2px solid', '10px solid'];

const radii = {
  button: '5px',
  modal: '2px',
};

const shadows = {
  box: {
    modal: `0 0 5px 5px ${colors.blackTransparent}`,
  },
  text: `-0.5px -0.5px 1px ${colors.black}`,
};

const theme = {
  breakpoints,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  borders,
  sizes,
  shadows,
  radii,
};

export default theme;
