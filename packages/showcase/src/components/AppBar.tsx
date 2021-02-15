import React from 'react';
import { AppBar } from '@snapdev-ui/core';
// import AppBar from '@snapdev-ui/core/AppBar';
import ThemeSwitcher from './ThemeSwitcher';

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
    themeSwitcher={<ThemeSwitcher />}
  />
);

export default Component;