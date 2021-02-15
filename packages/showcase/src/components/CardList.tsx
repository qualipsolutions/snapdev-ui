import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Section, Box } from '@snapdev-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemContainer: {
      backgroundColor:
        theme.palette.type === 'dark'
          ? theme.palette.grey[900]
          : theme.palette.grey[100],
    },
  })
);

const CardList = () => {
  const classes = useStyles();

  return (
    <List>
      <ListItem
        divider
        classes={{
          container: classes.listItemContainer,
        }}
        button
        onClick={() => {}}
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Civil" secondary="Composer" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

const Component = () => (
  <Section title="Card List">
    <Box p={2}>
      <CardList />
    </Box>
  </Section>
);

export default Component;
