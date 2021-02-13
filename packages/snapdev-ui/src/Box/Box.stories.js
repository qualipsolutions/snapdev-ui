import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Item from '../Item';
import Box from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Basic = Template.bind({});
Basic.args = {
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
