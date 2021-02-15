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
  fullWidth: true,
};

export const Hint = Template.bind({});
Hint.args = {
  ...Basic.args,
  helperText: 'Provide more details here',
};

export const Value = Template.bind({});
Value.args = {
  ...Hint.args,
  input: {
    value: 'Tshepo',
  },
};

export const Error = Template.bind({});
Error.args = {
  ...Hint.args,
  meta: {
    touched: true,
    error: 'Field is required',
  },
};
