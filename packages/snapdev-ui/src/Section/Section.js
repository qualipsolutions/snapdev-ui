import React from 'react';
import Paper from '@material-ui/core/Paper';
import Text from '../Text';
import Center from '../Center';

const renderTitle = (title, titleVariant, center) => {
  if (title) {
    return center ? (
      <Center centerY={false}>
        <Text variant={titleVariant}>{title}</Text>
      </Center>
    ) : (
      <Text variant={titleVariant}>{title}</Text>
    );
  }

  return <></>;
};

const Section = (props) => {
  const {
    title,
    titleVariant = 'h6',
    children,
    spacing = 20,
    center = false,
  } = props;
  return (
    <Paper style={{ padding: spacing }}>
      {renderTitle(title, titleVariant, center)}

      {/* <br /> */}
      {children}
    </Paper>
  );
};

export default Section;
