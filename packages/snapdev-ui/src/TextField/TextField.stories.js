import React from 'react';
import TextField from './TextField';

export default {
  title: 'Form/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Workflow Name',
  helperText:
    'Alphanumeric characters, dashes, or underscores. i.e. my-business-process-workflow',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'First Name',
  placeholder: 'Enter first name here',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Placeholder.args,
  label: 'First Name',
  fullWidth: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  ...FullWidth.args,
  helperText: 'Provide more details here',
};

export const Value = Template.bind({});
Value.args = {
  ...HelperText.args,
  helperText: 'Provide more details here',
  input: {
    value: 'Tshepo',
  },
};

export const Error = Template.bind({});
Error.args = {
  ...HelperText.args,
  helperText: 'Provide more details here',
  meta: {
    touched: true,
    error: 'Field is required',
  },
};
