import Box from '@material-ui/core/Box';
import React from 'react';

const Spacer = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Box style={{ ...style, flex: '1 1 0%', placeSelf: 'stretch' }} {...rest}>
      {children}
    </Box>
  );
};

export default Spacer;
