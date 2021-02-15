import React from 'react';
import MenuList from './MenuList';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

export default {
  title: 'Navigation/MenuList',
  component: MenuList,
};

const Template = (args) => <MenuList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onClick: (id) => {
    console.log({ id });
  },
  buttons: [
    {
      id: 'inbox',
      label: 'Inbox',
      icon: <InboxIcon />,
    },
    {
      id: 'divider1',
      variant: 'divider',
    },
    {
      id: 'sent',
      label: 'Sent Mail',
      icon: <SendIcon />,
    },
    {
      id: 'drafts',
      label: 'Drafts',
      icon: <DraftsIcon />,
    },
  ],
};
