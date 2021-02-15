import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label:
    'I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms.',
};

export const Checked = Template.bind({});
Checked.args = {
  label:
    'I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms.',
  input: { value: true },
};

export const Hint = Template.bind({});
Hint.args = {
  label:
    'I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms.',
  helperText: 'You must accept to continue',
};

export const Error = Template.bind({});
Error.args = {
  label:
    'I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms.',
  // input: { value: true },
  // helperText: 'You must accept to continue',
  meta: {
    touched: true,
    error: 'You must accept to continue',
  },
};
