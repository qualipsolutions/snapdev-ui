import Grid from '@material-ui/core/Grid';
import React from 'react';
import Center from '../Center/Center';
import Column from '../Column/Column';
import DetailLabel from '../DetailLabel/DetailLabel';
import Row from '../Row/Row';
import Text from '../Text/Text';
import Spacer from './Spacer';

export default {
  title: 'Layout/Spacer',
  component: Spacer,
};

const RowTemplate = (args) => (
  <Row spacing={2}>
    <Grid item>
      <DetailLabel label="App Name" text="Snapdev UI" />
    </Grid>
    <Grid item>
      <DetailLabel label="Version" text="1.0.0" />
    </Grid>
    <Spacer style={{ backgroundColor: 'yellow' }}>
      <Center>
        <Text color="primary">I am a spacer</Text>
      </Center>
    </Spacer>
    <Grid item>
      <DetailLabel label="Author" text="Qualip Solutions" />
    </Grid>
  </Row>
);

export const RowSpacer = RowTemplate.bind({});
RowSpacer.args = {};

const ColumnTemplate = (args) => (
  <Column style={{ height: '100vh', padding: '20px' }} spacing={2}>
    <Grid item>
      <DetailLabel label="App Name" text="Snapdev UI" />
    </Grid>
    <Grid item>
      <DetailLabel label="Version" text="1.0.0" />
    </Grid>
    <Spacer style={{ backgroundColor: 'yellow' }}>
      <Center>
        <Text color="primary">I am a spacer</Text>
      </Center>
    </Spacer>
    <Grid item>
      <DetailLabel label="Author" text="Qualip Solutions" />
    </Grid>
  </Column>
);

export const ColumnSpacer = ColumnTemplate.bind({});
ColumnSpacer.args = {};
