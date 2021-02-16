import React, { createContext, useState } from 'react';
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

const generateClassName = createGenerateClassName({
  // productionPrefix: 'frenchieStoreHost',
  // seed: 'frenchieStoreHost',
});

const darkTheme = DarkTheme({ theme: {} });

const lightTheme = LightTheme({ theme: {} });

export const StyleContext = createContext({});

const StyleProvider = (props) => {
  const { children } = props;
  const [useDarkTheme, setTheme] = useState(true);

  const switchTheme = () => {
    // const nextTheme = useDarkTheme ? lightTheme : darkTheme;
    // dispatchEvent(eventsToDispatch.HOST_THEME_CHANGED, nextTheme);
    setTheme((v) => !v);
  };

  return (
    <StyleContext.Provider value={{ useDarkTheme, switchTheme }}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </StylesProvider>
    </StyleContext.Provider>
  );
};

export default StyleProvider;
