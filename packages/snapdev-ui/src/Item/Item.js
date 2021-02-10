import Grid from '@material-ui/core/Grid';
import React from 'react';

const Item = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};

export default Item;
