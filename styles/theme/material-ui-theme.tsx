import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ptBR } from '@material-ui/core/locale';

// Create a theme instance.
const MuiTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#FF914D',
        contrastText: '#fff',
      },
      secondary: {
        main: '#8C52FF',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
      ].join(','),
    },
  },
  ptBR
);

export default MuiTheme;
