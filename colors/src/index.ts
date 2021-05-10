import windiColors from 'tailwindcss/colors';

export const colors = {
  colors: {
    transparent: '#00000000',
    primary: '#5866CD',
    secondary: '#00FF7F',
    white: '#FFFFFF',
    black: {
      default: windiColors.black,
      divriots: windiColors.trueGray['900'],
    },
    gray: {
      darker: '#262628',
      dark: '#4d4d4f',
      mid: '#737375',
      light: '#99999B',
      divriots: windiColors.coolGray['100'],
    },
    teal: {
      light: windiColors.teal[200],
      mid: windiColors.teal[500],
      dark: windiColors.teal[800],
    },
    background: windiColors.coolGray['100'],
  },
};
