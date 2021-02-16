import React from 'react';
import { AppBar } from '@snapdev-ui/core';

const Component = () => (
  <AppBar
    title="Snapdev UI"
    elevation={10}
    position="fixed"
    isSignedIn
    appName="Dashboard"
    appIndex={0}
    email="tshepo.mgaga@gmail.com"
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
