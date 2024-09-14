import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Your custom primary color
    },
    secondary: {
      main: '#D91D49', // Your custom secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Oswald, sans-serif',
          fontSize : '1.1em'
        },
      },
    }
  }
});

export default theme;