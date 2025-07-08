import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8bc547', 
      light: '#b6da8b', 
      dark: '#588028',
      contrastText: '#354e18',
      
    },
secondary: {
  main: '#e6f3d8',
},

    grey: {
      50: '#fafafa',
      100: '#e6e7e3',
      200: '#c7cbc2', 
      300: '#808c73',
      400: '#575b52', 
      500: '#333630', 
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#333630',
      secondary: '#808c73',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      [`@media (min-width:600px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (min-width:960px)`]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      [`@media (min-width:600px)`]: {
        fontSize: '2rem',
      },
      [`@media (min-width:960px)`]: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      [`@media (min-width:600px)`]: {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      [`@media (min-width:600px)`]: {
        fontSize: '1.125rem',
      },
    },
  },
  spacing: 8, 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,
        },
        containedPrimary: {
          color: '#354e18', 
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme;
