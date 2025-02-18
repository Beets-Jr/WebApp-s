import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import theme from './theme';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App; 