import React from 'react';
import Center from '../Center/Center';
import Column from '../Column/Column';
import DetailLabel from '../DetailLabel/DetailLabel';
import Item from '../Item/Item';
import Row from '../Row/Row';
import Text from '../Text/Text';
import Spacer from './Spacer';

export default {
  title: 'Layout/Spacer',
  component: Spacer,
};

const RowTemplate = (args) => (
  <Row spacing={2}>
    <Item>
      <DetailLabel label="App Name" text="Snapdev UI" />
    </Item>
    <Item>
      <DetailLabel label="Version" text="1.0.0" />
    </Item>
    <Spacer style={{ backgroundColor: 'yellow' }}>
      <Center>
        <Text color="primary">I am a spacer</Text>
      </Center>
    </Spacer>
    <Item>
      <DetailLabel label="Author" text="Qualip Solutions" />
    </Item>
  </Row>
);

export const RowSpacer = RowTemplate.bind({});
RowSpacer.args = {};

const ColumnTemplate = (args) => (
  <Column style={{ height: '100vh', padding: '20px' }} spacing={2}>
    <Item>
      <DetailLabel label="App Name" text="Snapdev UI" />
    </Item>
    <Item>
      <DetailLabel label="Version" text="1.0.0" />
    </Item>
    <Spacer style={{ backgroundColor: 'yellow' }}>
      <Center>
        <Text color="primary">I am a spacer</Text>
      </Center>
    </Spacer>
    <Item>
      <DetailLabel label="Author" text="Qualip Solutions" />
    </Item>
  </Column>
);

export const ColumnSpacer = ColumnTemplate.bind({});
ColumnSpacer.args = {};
