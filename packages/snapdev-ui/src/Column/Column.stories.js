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
