import React from 'react';
import Section from './Section';

export default {
  title: 'Layout/Section',
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Title',
};
