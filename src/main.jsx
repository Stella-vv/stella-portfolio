// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 👇 这三行必须有！缺一不可！
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* 👈 这里必须用到 theme */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);