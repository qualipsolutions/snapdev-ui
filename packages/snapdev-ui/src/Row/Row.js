import Grid from '@material-ui/core/Grid';
import React from 'react';

const Row = (props) => {
  const {
    children,
    heightOffset = '0px',
    style,
    stretch = false,
    debug,
    ...rest
  } = props;

  const moreStyles = {};
  if (stretch) {
    moreStyles.height = `calc(100vh - ${heightOffset})`;
  }
  if (debug) {
    moreStyles.backgroundColor = debug;
  }
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems={stretch ? 'stretch' : 'flex-start'}
      style={{ ...style, ...moreStyles }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
