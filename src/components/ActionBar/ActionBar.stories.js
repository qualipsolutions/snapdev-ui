import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import ActionBar from './ActionBar';

export default {
  title: 'Button/ActionBar',
  component: ActionBar,
};

const Template = (args) => <ActionBar {...args} />;

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

export const AlwaysActive = Template.bind({});
AlwaysActive.args = {
  buttons: [
    {
      id: 'create',
      label: 'Create',
      color: 'primary',
      alwaysActive: true,
      icon: <AddIcon />,
    },
    {
      id: 'edit',
      label: 'Edit',
      disabled: true,
      icon: <EditIcon />,
    },
  ],
};

export const Submit = Template.bind({});
Submit.args = {
  buttons: [
    {
      id: 'save',
      label: 'Save',
      color: 'primary',
      submit: true,
      icon: <SaveIcon />,
    },
  ],
};

export const ButtonSpinner = Template.bind({});
ButtonSpinner.args = {
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
      id: 'save',
      label: 'Save',
      color: 'primary',
      variant: 'spinner',
      submit: true,
      processing: true,
      icon: <SaveIcon />,
    },
  ],
};

export const MenuSpinner = Template.bind({});
MenuSpinner.args = {
  processing: true,
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
      id: 'save',
      label: 'Save',
      color: 'primary',
      variant: 'spinner',
      submit: true,
      icon: <SaveIcon />,
    },
  ],
};
