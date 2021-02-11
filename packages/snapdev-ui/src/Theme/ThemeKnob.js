import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';

import Light from './LightTheme';
import Dark from './DarkTheme';

const themes = { Light, Dark };
const themeNames = Object.keys(themes);

export default ({ children }) => {
  const theme = select('Theme', themeNames, themeNames[0], 'Themes');

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
