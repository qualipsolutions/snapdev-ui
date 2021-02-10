import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 0,
  },
  listItemIconOnlyRoot: {
    minWidth: 'unset',
  },
  listItemIconRoot: {
    minWidth: '35px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

/**
 * const buttons = [{
      id: 'create',
      label: 'Create workflow',
      color: 'primary',
      disabled: false,
      icon: <AddIcon />,
    }];
 * <ActionMenu buttons={buttons} onClick={handleActionClick}/>
 *
 * @param { buttons } props
 */
const ActionMenu = (props) => {
  const { buttons, onClick } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        classes={{ root: classes.iconButton }}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {buttons.map((button) => (
          <MenuItem
            key={button.id}
            disabled={button.disabled || false}
            onClick={() => {
              setAnchorEl(null);
              if (onClick) onClick(button);
            }}
          >
            {button.icon ? (
              <ListItemIcon
                classes={{
                  root: !button.label ? classes.listItemIconOnlyRoot : classes.listItemIconRoot,
                }}
                key={button.id}
              >
                {button.icon}
              </ListItemIcon>
            ) : (
              <></>
            )}
            {button.label ? <ListItemText key={button.id} primary={button.label} /> : <></>}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default ActionMenu;
