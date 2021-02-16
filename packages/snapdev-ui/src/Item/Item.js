import Grid from '@material-ui/core/Grid';
import React from 'react';

const Item = (props) => {
  const { children, stretch = false, style, ...rest } = props;
  const moreStyles = {};
  if (stretch) {
    moreStyles.flex = 1;
  }
  return (
    <Grid item style={{ ...style, ...moreStyles }} {...rest}>
      {children}
    </Grid>
  );
};

export default Item;
