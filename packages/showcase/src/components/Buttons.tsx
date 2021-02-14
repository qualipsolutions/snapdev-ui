import React from 'react';
import {
  Column,
  Item,
  Section,
  Box,
  ActionButtonGroup,
} from '@snapdev-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

const Component = () => (
  <Column>
    <Item>
      <Section title="Basic Buttons">
        <Box p={1}>
          <ActionButtonGroup
            buttons={[
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
            ]}
          />
        </Box>
      </Section>
    </Item>
    <Item>
      <Section title="Buttons with icons">
        <Box p={1}>
          <ActionButtonGroup
            buttons={[
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
            ]}
          />
        </Box>
      </Section>
    </Item>
    <Item>
      <Section title="Disabled buttons">
        <Box p={1}>
          <ActionButtonGroup
            buttons={[
              {
                id: 'create',
                label: 'Create',
                color: 'primary',
                disabled: true,
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
            ]}
          />
        </Box>
      </Section>
    </Item>
    <Item>
      <Section title="Spinner button">
        <Box p={1}>
          <ActionButtonGroup
            buttons={[
              {
                id: 'save',
                label: 'Save',
                color: 'primary',
                variant: 'spinner',
                submit: true,
                processing: true,
                icon: <SaveIcon />,
              },
            ]}
          />
        </Box>
      </Section>
    </Item>
  </Column>
);

export default Component;
