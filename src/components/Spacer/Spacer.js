import Box from '@material-ui/core/Box';
import React from 'react';

const Spacer = (props) => {
  const { children, ...rest } = props;
  return <Box style={{ flex: '1 1 0%', placeSelf: 'stretch' }} />;
};

export default Spacer;
