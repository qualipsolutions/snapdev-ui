
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const snapflowTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

addDecorator(story => (<ThemeProvider theme={snapflowTheme}>{story()}</ThemeProvider>));