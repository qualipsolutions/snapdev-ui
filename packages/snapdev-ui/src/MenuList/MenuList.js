import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuList = (props) => {
  const { buttons, onClick } = props;

  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      {buttons.map(({ variant, id, label, icon }) => {
        if (variant === 'divider') {
          return <Divider key={id} />;
        }
        return (
          <ListItem key={id} button onClick={() => onClick(id)}>
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : <></>}
            <ListItemText primary={label} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default MenuList;
