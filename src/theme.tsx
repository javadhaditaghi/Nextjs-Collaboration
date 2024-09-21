'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e15381',  // Primary-500
      light: '#f8d2e1', // Primary-200
      dark: '#b32346',  // Primary-700
    },
    secondary: {
      main: '#0d97ea',  // Secondary-500
      light: '#bae2fd', // Secondary-200
      dark: '#065186',  // Secondary-600
    },
    background: {
      default: '#FFFFFF',  // White
      paper: '#f3f4f6',    // Gray-100
    },
    text: {
      primary: '#1f1f1f',  // Dark
      secondary: '#4b5563', // Gray-600
      disabled: '#9ca3af',  // Gray-400
    },
    divider: '#e5e7eb',     // Gray-200
  },
  typography: {
    fontFamily: 'Kanit, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 'bold',
      lineHeight: '5rem',
      letterSpacing: '0.0375rem',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: '2rem',
      letterSpacing: '0.035rem',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '3.5rem',
      letterSpacing: '0.05rem',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '2.75rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,  // SemiBold
      lineHeight: '2.5rem',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,  // SemiBold
      lineHeight: '2rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: '1.5rem',
      fontWeight: 600,  // SemiBold for extra small text
    },
  },
});

export default theme;

