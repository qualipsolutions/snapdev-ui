import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleProvider } from '@snapdev-ui/core';

ReactDOM.render(
  <StyleProvider>
    <App />
  </StyleProvider>,
  document.getElementById('root')
);
