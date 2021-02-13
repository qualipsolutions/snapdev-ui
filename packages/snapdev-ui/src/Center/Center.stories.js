import React from 'react';
import Text from '../Text';
import Center from './Center';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Box from '../Box';

export default {
  title: 'Layout/Center',
  component: Center,
};

const useStyles = makeStyles({
  root: {
    minHeight: 250,
  },
});

const Template = (args) => {
  const classes = useStyles();
  return <Card className={classes.root} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  elevation: 5,
  spacing: 2,
  // style: {
  //   position: 'relative',
  // },
  children: (
    <Box style={{ minHeight: 250 }}>
      <Center>
        <Text style={{ backgroundColor: 'yellow' }} color="primary">
          Item is centered
        </Text>
      </Center>
    </Box>
  ),
};
