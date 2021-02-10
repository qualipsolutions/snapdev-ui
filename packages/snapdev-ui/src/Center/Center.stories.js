import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Item from '../Item/Item';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';
import Center from './Center';

export default {
  title: 'Layout/Center',
  component: Center,
};

const Template = (args) => <Center {...args} />;

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
      <Spacer>
        <Center>
          <Text style={{ backgroundColor: 'yellow' }} color="primary">
            Item is centered
          </Text>
        </Center>
      </Spacer>
      <Item>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Item>
    </>
  ),
};
