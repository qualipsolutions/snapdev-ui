import React from 'react';
import Paper from '@material-ui/core/Paper';
import Text from '../Text';

const Section = (props) => {
  const { title, children, centered = false } = props;
  return (
    <Paper style={{ padding: 20 }}>
      <Text variant="h6">{title}</Text>
      <br />
      {children}
    </Paper>
  );
};

export default Section;
