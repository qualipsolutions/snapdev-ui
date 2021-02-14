import React from 'react';
import { Text, Section, Panel, Box } from '@snapdev-ui/core';

const Component = () => (
  <Section title="Panel">
    <Panel
      header={<Text variant="subtitle1">Title</Text>}
      body={
        <Box p={4}>
          <Text variant="body1">Body</Text>
        </Box>
      }
    />
  </Section>
);

export default Component;
