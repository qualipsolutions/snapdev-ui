import MuiBox from '@material-ui/core/Box';
import React from 'react';

const Box = (props) => {
  const { children, style, ...rest } = props;
  return (
    <MuiBox style={{ ...style, position: 'relative' }} {...rest}>
      {children}
    </MuiBox>
  );
};

export default Box;
