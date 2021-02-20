import { createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';

const DarkTheme = (props) => {
  const { theme = {} } = props;

  const defaultTheme = {
    palette: {
      type: 'dark',
      primary: {
        main: '#f9b934',
      },
      secondary: {
        // main: '#90caf9',
        main: 'rgb(220, 0, 78)',
      },
      // text: {
      //   secondary: '#AEB0B4',
      // },
      background: {
        paper: '#2a2d35',
        default: '#24262d',
      },
      panel: {
        head: '#30333b',
        body: 'rgba(68, 70, 79, 0.5)',
      },
      grey: {
        900: '#24262d',
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
