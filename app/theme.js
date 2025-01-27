import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#20312B',
    },
    secondary: {
      main: '#3A524B',
    },
    success: {
      main: '#60856B',
    },
    info: {
      main: '#81B3A3',
    },
    background: {
      default: '#20312B',
      paper: '#3A524B',
    },
    text: {
      primary: '#FFFFFF', // Adjust for better readability on dark backgrounds
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
