import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Item from '../Item/Item';
import Column from './Column';

export default {
  title: 'Layout/Column',
  component: Column,
};

const Template = (args) => <Column {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  spacing: 2,
  children: (
    <>
      <Item style={{ backgroundColor: 'green' }}>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Item style={{ backgroundColor: 'grey' }}>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Item style={{ backgroundColor: 'red' }}>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};

export const Stretch = Template.bind({});
Stretch.args = {
  stretch: true,
  heightOffset: '8.1rem',
  style: { backgroundColor: 'yellow', height: 300 },
  children: (
    <>
      <Item stretch style={{ backgroundColor: 'green' }}>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Item stretch style={{ backgroundColor: 'grey' }}>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Item stretch style={{ backgroundColor: 'red' }}>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};
