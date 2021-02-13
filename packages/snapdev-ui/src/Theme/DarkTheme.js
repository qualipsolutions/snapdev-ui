import { createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';

const DarkTheme = (props) => {
  const { theme = {} } = props;

  const defaultTheme = {
    palette: {
      type: 'dark',
      primary: {
        main: '#f6a821',
        // main: '#125ca6',
      },
      secondary: {
        main: '#cfd8dc',
      },
      background: {
        paper: '#2a2d35',
        default: '#24262d',
      },
      panel: {
        head: '#30333b',
        body: 'rgba(68, 70, 79, 0.5)',
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
