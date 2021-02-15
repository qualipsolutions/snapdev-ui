import React from 'react';
import { Section, Box, CardList } from '@snapdev-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const Component = () => (
  <Section title="Card List">
    <Box p={2}>
      <CardList
        items={[
          {
            id: '1',
            title: 'Tshepo Mgaga',
            subtitle: 'Artist',
            icon: <AccountCircleIcon />,
          },
          {
            id: '2',
            title: 'Sam Smith',
            subtitle: 'Artist',
            // disabled: true,
            icon: <PersonIcon />,
          },
          {
            id: '3',
            title: 'Jr.',
            subtitle: 'Artist',
            icon: <MusicNoteIcon />,
          },
        ]}
        onClick={(id) => {
          console.log({ id });
        }}
      />
    </Box>
  </Section>
);

export default Component;
