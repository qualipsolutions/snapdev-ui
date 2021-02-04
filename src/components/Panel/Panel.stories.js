import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Panel from './Panel';

export default {
  title: 'Container/Panel',
  component: Panel,
};

const Template = (args) => <Panel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  header: <Typography variant="h6">Title components goes here</Typography>,
  body: (
    <Box p={5}>
      <Typography variant="body2">Body components goes here</Typography>
    </Box>
  ),
};

export const WithMinHeight = Template.bind({});
WithMinHeight.args = {
  ...Basic.args,
  minHeight: 400,
};
