import Grid from '@material-ui/core/Grid';
import React from 'react';

const Center = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ ...style, height: '100%' }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Center;
