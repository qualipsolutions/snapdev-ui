import Grid from '@material-ui/core/Grid';
import React from 'react';

const Column = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" {...rest}>
      {children}
    </Grid>
  );
};

export default Column;
