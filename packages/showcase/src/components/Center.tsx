import React from 'react';
import { Text, Section, Center, Box } from '@snapdev-ui/core';

const Component = () => (
  <Section title="Center">
    <Box style={{ minHeight: 250 }}>
      <Center>
        <Text style={{ backgroundColor: 'yellow' }} color="primary">
          Item is centered
        </Text>
      </Center>
    </Box>
  </Section>
);

export default Component;
