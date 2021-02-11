import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkTheme } from '@snapdev-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider theme={DarkTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
