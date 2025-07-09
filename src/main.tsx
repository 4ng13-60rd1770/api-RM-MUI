import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import './i18n';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
          <BrowserRouter basename="/api-RM-MUI/">
      <App />
          </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
