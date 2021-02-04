import React from 'react';
import DetailLabel from './DetailLabel';

export default {
  title: 'Form/DetailLabel',
  component: DetailLabel,
};

const Template = (args) => <DetailLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Story Type',
  text: 'Args Template Basic',
};

export const WithNoWrap = Template.bind({});
WithNoWrap.args = {
  label: 'Story Type',
  text: 'Args Template',
  noWrap: false,
};

export const WithWrap = Template.bind({});
WithWrap.args = {
  label: 'Story Type',
  text: 'Args Template',
  noWrap: true,
};
