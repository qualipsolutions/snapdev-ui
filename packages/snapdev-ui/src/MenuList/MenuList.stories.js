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

export const Divider = Template.bind({});
Divider.args = {
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
      id: 'divider2',
      variant: 'divider',
    },
    {
      id: 'drafts',
      label: 'Drafts',
      icon: <DraftsIcon />,
    },
  ],
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  onClick: (id) => {
    console.log({ id });
  },
  buttons: [
    {
      id: 'inbox',
      label: 'Inbox',
      // icon: <InboxIcon />,
    },
    {
      id: 'divider1',
      variant: 'divider',
    },
    {
      id: 'sent',
      label: 'Sent Mail',
      // icon: <SendIcon />,
    },
    {
      id: 'divider2',
      variant: 'divider',
    },
    {
      id: 'drafts',
      label: 'Drafts',
      // icon: <DraftsIcon />,
    },
  ],
};
