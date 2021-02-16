import Grid from '@material-ui/core/Grid';
import React from 'react';

const Column = (props) => {
  const {
    children,
    heightOffset = '0px',
    stretch = false,
    style,
    ...rest
  } = props;
  const moreStyles = {};
  if (stretch) {
    moreStyles.height = `calc(100vh - ${heightOffset})`;
  }
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      style={{ ...style, ...moreStyles }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Column;
