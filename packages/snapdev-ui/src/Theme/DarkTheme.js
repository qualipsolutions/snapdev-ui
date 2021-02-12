import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
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
});
