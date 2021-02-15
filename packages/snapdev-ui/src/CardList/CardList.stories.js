import React from 'react';
import CardList from './CardList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default {
  title: 'Card/CardList',
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [
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
  ],
  onClick: (id) => {
    console.log({ id });
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    {
      id: '1',
      title: 'Tshepo Mgaga',
      subtitle: 'Artist',
      disabled: true,
      icon: <AccountCircleIcon />,
    },
    {
      id: '2',
      title: 'Sam Smith',
      subtitle: 'Artist',
      disabled: true,
      icon: <PersonIcon />,
    },
    {
      id: '3',
      title: 'Jr.',
      subtitle: 'Artist',
      disabled: true,
      icon: <MusicNoteIcon />,
    },
  ],
  onClick: (id) => {
    console.log({ id });
  },
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  items: [
    {
      id: '1',
      title: 'Tshepo Mgaga',
      subtitle: 'Artist',
      // disabled: true,
      // icon: <AccountCircleIcon />,
    },
    {
      id: '2',
      title: 'Sam Smith',
      subtitle: 'Artist',
      // disabled: true,
      // icon: <PersonIcon />,
    },
    {
      id: '3',
      title: 'Jr.',
      subtitle: 'Artist',
      // disabled: true,
      // icon: <MusicNoteIcon />,
    },
  ],
  onClick: (id) => {
    console.log({ id });
  },
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  items: [
    {
      id: '1',
      title: 'Tshepo Mgaga',
      // subtitle: 'Artist',
      // disabled: true,
      // icon: <AccountCircleIcon />,
    },
    {
      id: '2',
      title: 'Sam Smith',
      // subtitle: 'Artist',
      // disabled: true,
      // icon: <PersonIcon />,
    },
    {
      id: '3',
      title: 'Jr.',
      // subtitle: 'Artist',
      // disabled: true,
      // icon: <MusicNoteIcon />,
    },
  ],
  onClick: (id) => {
    console.log({ id });
  },
};
