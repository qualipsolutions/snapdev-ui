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
      <Item>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Item>
      <Spacer />
      <Item>
        <DetailLabel label="Version" text="1.0.0" />
      </Item>
      <Spacer />
      <Item>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};
