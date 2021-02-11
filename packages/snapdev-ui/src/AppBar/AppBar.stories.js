import React from 'react';
import AppBar from './AppBar';

import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';

const history = createBrowserHistory();

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
};

const Template = (args) => (
  <Router history={history}>
    <AppBar {...args} />
  </Router>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Snapdev UI',
  isSignedIn: true,
  user: null,
  processing: false,
  appName: 'Dashboard',
  appIndex: 0,
  apps: [
    {
      path: '/dashboard',
      title: 'Dashboard',
    },
    {
      path: '/workflow',
      title: 'Workflow',
    },
  ],
  handleTabChange: (href) => {
    console.log({ href });
  },
  handleSignOut: () => {
    console.log('Sign out');
  },
  handleSignIn: () => {
    console.log('Sign In');
  },
};
