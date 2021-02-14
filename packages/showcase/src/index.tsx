import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DarkTheme, LightTheme } from '@snapdev-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = DarkTheme({
  theme: {
    palette: {
      // background: {
      //   paper: '#292c34',
      //   default: '#292c34',
      // },
      // panel: {
      //   head: '#30333b',
      //   body: '#3c3e47',
      // },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
