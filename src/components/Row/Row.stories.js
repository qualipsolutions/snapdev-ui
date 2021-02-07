import Grid from '@material-ui/core/Grid';
import React from 'react';
import DetailLabel from '../DetailLabel/DetailLabel';
import Spacer from '../Spacer/Spacer';
import Row from './Row';

export default {
  title: 'Layout/Row',
  component: Row,
};

const Template = (args) => <Row {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  spacing: 10,
  children: (
    <>
      <Grid item>
        <DetailLabel label="App Name" text="Snapdev UI" />
      </Grid>
      <Spacer />
      <Grid item>
        <DetailLabel label="Version" text="1.0.0" />
      </Grid>
      <Spacer />
      <Grid item>
        <DetailLabel label="Author" text="Qualip Solutions" />
      </Grid>
    </>
  ),
};
