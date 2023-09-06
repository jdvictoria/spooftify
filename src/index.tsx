import React from 'react';
import ReactDOM from 'react-dom/client';

import './globals.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import {CssVarsProvider, extendTheme} from "@mui/joy";

const palette = {
    primary: {
        solidBg: '#0d6efd',
        solidBorder: '#0d6efd',
        solidHoverBg: '#0b5ed7',
        solidHoverBorder: '#0a58ca',
        solidActiveBg: '#0a58ca',
        solidActiveBorder: '#0a53be',
        solidDisabledBg: '#0d6efd',
        solidDisabledBorder: '#0d6efd',
    },
    neutral: {
        solidBg: '#6c757d',
        solidBorder: '#6c757d',
        solidHoverBg: '#5c636a',
        solidHoverBorder: '#565e64',
        solidActiveBg: '#565e64',
        solidActiveBorder: '#51585e',
        solidDisabledBg: '#6c757d',
        solidDisabledBorder: '#6c757d',
        // btn-light
        softColor: '#ffffff',
        softBg: '#4b4b4b',
        softBorder: '#4b4b4b',
        softHoverBg: '#f9fafb',
        softHoverBorder: '#f9fafb',
        softActiveBg: '#f9fafb',
        softActiveBorder: '#f9fafb',
        softDisabledBg: '#f8f9fa',
        softDisabledBorder: '#f8f9fa',
    },
    success: {
        solidBg: '#198754',
        solidBorder: '#198754',
        solidHoverBg: '#157347',
        solidHoverBorder: '#146c43',
        solidActiveBg: '#146c43',
        solidActiveBorder: '#13653f',
        solidDisabledBg: '#198754',
        solidDisabledBorder: '#198754',
    },
    danger: {
        solidBg: '#dc3545',
        solidBorder: '#dc3545',
        solidHoverBg: '#bb2d3b',
        solidHoverBorder: '#b02a37',
        solidActiveBg: '#b02a37',
        solidActiveBorder: '#a52834',
        solidDisabledBg: '#dc3545',
        solidDisabledBorder: '#dc3545',
    },
    warning: {
        solidColor: '#000',
        solidBg: '#ffc107',
        solidBorder: '#ffc107',
        solidHoverBg: '#ffca2c',
        solidHoverBorder: '#ffc720',
        solidActiveBg: '#ffcd39',
        solidActiveBorder: '#ffc720',
        solidDisabledBg: '#ffc107',
        solidDisabledBorder: '#ffc107',
    },
    info: {
        solidColor: '#000',
        solidBg: '#0dcaf0',
        solidBorder: '#0dcaf0',
        solidHoverBg: '#31d2f2',
        solidHoverBorder: '#25cff2',
        solidActiveBg: '#3dd5f3',
        solidActiveBorder: '#25cff2',
        solidDisabledBg: '#0dcaf0',
        solidDisabledBorder: '#0dcaf0',
    },
};

const theme = extendTheme({
    cssVarPrefix: 'bs',
    colorSchemes: {
        light: { palette },
        dark: { palette },
    },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <CssVarsProvider theme={theme}>
          <App />
      </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
