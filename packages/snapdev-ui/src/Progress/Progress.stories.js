import React from 'react';
import Progress from './Progress';

export default {
  title: 'Feedback/Progress',
  component: Progress,
};

const Template = (args) => <Progress {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
