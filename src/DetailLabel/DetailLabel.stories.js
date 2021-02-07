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

export const NoWrap = Template.bind({});
NoWrap.args = {
  label: 'Story Type',
  text: 'Args Template',
  noWrap: false,
};

export const Wrap = Template.bind({});
Wrap.args = {
  label: 'Story Type',
  text: 'Args Template',
  noWrap: true,
};
