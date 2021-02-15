import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  listItemContainer: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
  },
}));

const CardList = (props) => {
  const { items = [], onClick } = props;
  const classes = useStyles();

  return (
    <List>
      {items.map(({ id, disabled, icon, title, subtitle, processing }) => {
        return (
          <ListItem
            key={id}
            disabled={disabled}
            divider
            classes={{
              container: classes.listItemContainer,
            }}
            button
            onClick={() => onClick(id)}
          >
            {icon ? (
              <ListItemAvatar>
                <Avatar>{icon}</Avatar>
              </ListItemAvatar>
            ) : (
              <></>
            )}
            <ListItemText primary={title} secondary={subtitle} />
            {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
          </ListItem>
        );
      })}
    </List>
  );
};

export default CardList;
