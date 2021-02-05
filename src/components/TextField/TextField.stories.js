import React from 'react';
import TextField from './TextField';

export default {
  title: 'Form/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'First Name',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'First Name',
  placeholder: 'Enter first name here',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...WithPlaceholder.args,
  label: 'First Name',
  fullWidth: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...FullWidth.args,
  helperText: 'Provide more details here',
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...WithHelperText.args,
  helperText: 'Provide more details here',
  input: {
    value: 'Tshepo',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  ...WithHelperText.args,
  helperText: 'Provide more details here',
  meta: {
    touched: true,
    error: 'Field is required',
  },
};
