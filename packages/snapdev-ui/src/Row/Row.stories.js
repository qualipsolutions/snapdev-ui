import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Item from '../Item/Item';
import Spacer from '../Spacer/Spacer';
import Row from './Row';

export default {
  title: 'Layout/Row',
  component: Row,
};

const Template = (args) => <Row {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  spacing: 2,
  children: (
    <>
      <Item style={{ backgroundColor: 'green' }}>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Spacer />
      <Item style={{ backgroundColor: 'grey' }}>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Spacer />
      <Item style={{ backgroundColor: 'red' }}>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};

export const Stretch = Template.bind({});
Stretch.args = {
  stretch: true,
  heightOffset: '50px',
  style: { backgroundColor: 'yellow' },
  children: (
    <>
      <Item xs={12} sm={6} md={2} style={{ backgroundColor: 'green' }}>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Item xs={12} sm={6} md={2} style={{ backgroundColor: 'grey' }}>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Item xs={12} sm={12} md={8} style={{ backgroundColor: 'red' }}>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};
