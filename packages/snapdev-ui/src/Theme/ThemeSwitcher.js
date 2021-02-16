import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { StyleContext } from './StyleProvider';

const ThemeSwitcher = () => {
  const { useDarkTheme, switchTheme } = useContext(StyleContext);

  return (
    <Tooltip
      title={useDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <IconButton onClick={switchTheme}>
        {useDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;
