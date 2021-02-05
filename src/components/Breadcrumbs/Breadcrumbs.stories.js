import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  links: [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Workflows', link: '/workflow' },
    { title: 'Create workflow' },
  ],
};

export const WithNavigate = Template.bind({});
WithNavigate.args = {
  links: [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Workflows', link: '/workflow' },
    { title: 'Create workflow' },
  ],
  // eslint-disable-next-line no-alert
  onNavigate: (link) => alert('Navigation occured using the onNavigate function'),
};

export const WithNavigator = Template.bind({});
WithNavigator.args = {
  links: [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Workflows', link: '/workflow' },
    { title: 'Create workflow' },
  ],
  navigator: {
    // eslint-disable-next-line no-alert
    push: (link) => alert(`Navigation occured using a navigator service`),
  },
};
