import Button from '@material-ui/core/Button';
import React from 'react';

export default {
  title: 'Core/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryContained = Template.bind({});
PrimaryContained.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Create new workflow',
};
