import { createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';

const DarkTheme = (props) => {
  const { theme = {} } = props;

  const defaultTheme = {
    palette: {
      type: 'dark',
      primary: {
        main: '#374046',
        // main: '#125ca6',
      },
      secondary: {
        main: '#cfd8dc',
      },
      progress: {
        background: '#374046',
        indicator: '#d0d2d3',
      },
    },
  };

  const mergedOptions = _.merge(defaultTheme, theme);

  return createMuiTheme(mergedOptions);
};

export default DarkTheme;
