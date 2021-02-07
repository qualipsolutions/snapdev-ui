import Typography from '@material-ui/core/Typography';
import React from 'react';

const Text = (props) => {
  const { children, variant = 'body2', ...rest } = props;
  return (
    <Typography variant={variant} {...rest}>
      {children}
    </Typography>
  );
};

export default Text;
