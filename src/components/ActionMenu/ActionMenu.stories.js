import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import React from 'react';
import ActionMenu from './ActionMenu';
// import SaveIcon from '@material-ui/icons/Save';

export default {
  title: 'Button/ActionMenu',
  component: ActionMenu,
};

const Template = (args) => <ActionMenu {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttons: [
    {
      id: 'create',
      label: 'Create',
      color: 'primary',
    },
    {
      id: 'edit',
      label: 'Edit',
    },
    {
      id: 'view',
      label: 'View',
    },
    {
      id: 'delete',
      label: 'Delete',
      color: 'secondary',
    },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  buttons: [
    {
      id: 'create',
      label: 'Create',
      color: 'primary',
      icon: <AddIcon />,
    },
    {
      id: 'edit',
      label: 'Edit',
      icon: <EditIcon />,
    },
    {
      id: 'view',
      label: 'View',
      icon: <DescriptionIcon />,
    },
    {
      id: 'delete',
      label: 'Delete',
      color: 'secondary',
      icon: <DeleteIcon />,
    },
  ],
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  buttons: [
    {
      id: 'refresh',
      variant: 'icon-only',
      icon: <RefreshIcon />,
    },
    {
      id: 'create',
      color: 'primary',
      variant: 'icon-only',
      icon: <AddIcon />,
    },
    {
      id: 'edit',
      variant: 'icon-only',
      icon: <EditIcon />,
    },
    {
      id: 'view',
      variant: 'icon-only',
      icon: <DescriptionIcon />,
    },
    {
      id: 'delete',
      color: 'secondary',
      variant: 'icon-only',
      icon: <DeleteIcon />,
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttons: [
    {
      id: 'create',
      label: 'Create',
      color: 'primary',
      icon: <AddIcon />,
    },
    {
      id: 'edit',
      label: 'Edit',
      disabled: true,
      icon: <EditIcon />,
    },
    {
      id: 'view',
      label: 'View',
      disabled: true,
      icon: <DescriptionIcon />,
    },
    {
      id: 'delete',
      label: 'Delete',
      color: 'secondary',
      disabled: true,
      icon: <DeleteIcon />,
    },
  ],
};
