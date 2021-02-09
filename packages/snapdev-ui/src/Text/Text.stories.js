import React from 'react';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
};

export const H1 = Template.bind({});
H1.args = {
  ...Basic.args,
  variant: 'h1',
};
export const H2 = Template.bind({});
H2.args = {
  ...Basic.args,
  variant: 'h2',
};
export const H3 = Template.bind({});
H3.args = {
  ...Basic.args,
  variant: 'h3',
};
export const H4 = Template.bind({});
H4.args = {
  ...Basic.args,
  variant: 'h4',
};
export const H5 = Template.bind({});
H5.args = {
  ...Basic.args,
  variant: 'h5',
};
export const H6 = Template.bind({});
H6.args = {
  ...Basic.args,
  variant: 'h6',
};
export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  ...Basic.args,
  variant: 'subtitle1',
};
export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  ...Basic.args,
  variant: 'subtitle2',
};
export const Body1 = Template.bind({});
Body1.args = {
  ...Basic.args,
  variant: 'body1',
};
export const Body2 = Template.bind({});
Body2.args = {
  ...Basic.args,
  variant: 'body2',
};

export const Button = Template.bind({});
Button.args = {
  ...Basic.args,
  variant: 'button',
};
export const Caption = Template.bind({});
Caption.args = {
  ...Basic.args,
  variant: 'caption',
};
export const Overline = Template.bind({});
Overline.args = {
  ...Basic.args,
  variant: 'overline',
};
