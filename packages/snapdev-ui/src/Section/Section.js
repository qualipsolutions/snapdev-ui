import React from 'react';
import Paper from '@material-ui/core/Paper';
import Text from '../Text';
import Center from '../Center';

const Section = (props) => {
  const { title, children, spacing = 20, center = false } = props;
  return (
    <Paper style={{ padding: spacing }}>
      {center ? (
        <Center centerY={false}>
          <Text variant="h6">{title}</Text>
        </Center>
      ) : (
        <Text variant="h6">{title}</Text>
      )}

      <br />
      {children}
    </Paper>
  );
};

export default Section;
