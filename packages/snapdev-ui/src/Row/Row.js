import Grid from '@material-ui/core/Grid';
import React from 'react';

const Row = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
