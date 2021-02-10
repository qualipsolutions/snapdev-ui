import React from 'react';
import Alert from './Alert';

export default {
  title: 'Notification/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

// message: 'Application saved sucessfully',
//   severity: 'success',
//   title: '',
//   onClose: () => {},

export const Success = Template.bind({});
Success.args = {
  message: 'Application saved sucessfully',
  severity: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Application failed!',
  severity: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Complete setting up your profile',
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'New update available',
  severity: 'info',
};

export const Dismiss = Template.bind({});
Dismiss.args = {
  message: 'I can be closed',
  severity: 'info',
  onClose: () => {},
};

export const Title = Template.bind({});
Title.args = {
  message: 'Check out my title',
  severity: 'info',
  title: 'Info',
  onClose: () => {},
};
