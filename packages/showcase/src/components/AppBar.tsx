import React from 'react';
import { AppBar } from '@snapdev-ui/core';
import history from '../history';

const Component = () => (
  <AppBar
    handleTabChange={(href) => {
      history.push(href);
    }}
    title="Snapdev UI"
    elevation={10}
    position="fixed"
    isSignedIn
    appName="Dashboard"
    appIndex={0}
    displayName="tshepo.mgaga@gmail.com"
    apps={[
      {
        path: '/dashboard',
        title: 'Dashboard',
      },
      {
        path: '/inbox',
        title: 'Inbox',
      },
    ]}
    themeSwitcher
  />
);

export default Component;
