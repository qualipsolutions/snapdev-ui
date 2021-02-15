import React from 'react';
import { Section, Box, MenuList } from '@snapdev-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const Component = () => (
  <Section title="Menu">
    <Box>
      <MenuList
        onClick={(id) => {
          console.log({ id });
        }}
        buttons={[
          {
            id: 'inbox',
            label: 'Inbox1',
            icon: <InboxIcon />,
          },
          {
            id: 'divider1',
            variant: 'divider',
          },
          {
            id: 'sent',
            label: 'Sent Mail2',
            icon: <SendIcon />,
          },
          {
            id: 'drafts',
            label: 'Drafts',
            icon: <DraftsIcon />,
          },
        ]}
      />
    </Box>
  </Section>
);

export default Component;
