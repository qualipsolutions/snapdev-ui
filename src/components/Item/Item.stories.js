import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Row from '../Row/Row';
import Item from './Item';

export default {
  title: 'Layout/Item',
  component: Row,
};

const Template = (args) => <Row {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  spacing: 2,
  children: (
    <>
      <Item>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Item>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Item>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};
