import { createMuiTheme } from '@material-ui/core/styles';
import _ from 'lodash';

const LightTheme = (props) => {
  const { theme = {} } = props;

  const defaultTheme = {
    palette: {
      type: 'light',
      panel: {
        head: '#fafafa',
        body: '#fff',
      },
      text: {
        secondary: '#AEB0B4',
      },
      progress: {
        background: 'rgb(182, 188, 226)',
        indicator: '#3f51b5',
      },
    },
  };

  const mergedOptions = _.merge(defaultTheme, theme);

  return createMuiTheme(mergedOptions);
};

export default LightTheme;
