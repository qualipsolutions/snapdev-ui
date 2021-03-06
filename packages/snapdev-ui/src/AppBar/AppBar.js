import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { blue } from '@material-ui/core/colors';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeSwitcher } from '../Theme';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    // backgroundColor: theme.palette.primary.main,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    cursor: 'pointer',
  },
  serviceMenu: {
    // marginTop: '3px',
    marginLeft: theme.spacing(2),
  },
  tabs: {
    marginLeft: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  drawer: {
    top: '69px',
  },
}));

const AppBar = (props) => {
  const {
    title,
    isSignedIn,
    displayName,
    processing,
    appName,
    appIndex,
    apps = [],
    position = 'static',
    color = 'primary',
    elevation = 0,
    themeSwitcher,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const open = Boolean(anchorEl);

  const classes = useStyles();

  const toggleDrawer = (opened) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpened(opened);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignInOrOut = () => {
    if (isSignedIn) {
      handleClose();
      if (props.handleSignOut) {
        props.handleSignOut();
      }
    } else {
      if (props.handleSignIn) {
        props.handleSignIn();
      }
    }
  };

  const LinkTab = (localProps) => (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        toggleDrawer(false)({ type: '' });
        if (props.handleTabChange) {
          props.handleTabChange(localProps.href);
        }
      }}
      {...localProps}
    />
  );

  const navToHome = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      if (props.handleTabChange) {
        props.handleTabChange('/dashboard');
      }
    } else {
      if (props.handleTabChange) {
        props.handleTabChange('/');
      }
    }
  };

  return (
    <MuiAppBar
      position={position}
      color={color}
      elevation={elevation}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <DeviceHubIcon className={classes.logoIcon} />
        <Typography
          className={classes.title}
          variant="h6"
          // color="inherit"
          noWrap
          onClick={navToHome}
        >
          {title}
        </Typography>

        {isSignedIn ? (
          <>
            <Button
              size="small"
              variant="contained"
              color="default"
              onClick={toggleDrawer(true)}
              className={classes.serviceMenu}
              endIcon={<ExpandMoreIcon />}
            >
              {appName}
            </Button>
            <Drawer
              className={classes.drawer}
              anchor="top"
              open={drawerOpened}
              onClose={toggleDrawer(false)}
            >
              <>
                <br />
                <Tabs
                  value={appIndex}
                  indicatorColor="secondary"
                  // textColor="primary"
                  variant="scrollable"
                  className={classes.tabs}
                >
                  {apps.map((i) => (
                    <LinkTab key={i.title} label={i.title} href={i.path} />
                  ))}

                  {/* <LinkTab label="Workflow" href="/workflow" /> */}
                  {/* <Tab label="Step Functions" /> */}
                  {/* <Tab label="Activity Task Queue" /> */}
                  {/* <Tab label="IAM" /> */}
                </Tabs>
                <br />
              </>
            </Drawer>
          </>
        ) : (
          <div />
        )}

        <div className={classes.grow} />
        {themeSwitcher ? <ThemeSwitcher /> : <></>}

        {!isSignedIn ? (
          <Hidden xsDown>
            <Button
              color="primary"
              className={classes.link}
              component={RouterLink}
              to="/auth/signup"
            >
              Create Account
            </Button>
          </Hidden>
        ) : (
          <div />
        )}
        <Hidden xsDown={isSignedIn}>
          <div className={classes.wrapper}>
            <Button
              color="inherit"
              className={classes.link}
              disabled={processing}
              onClick={onSignInOrOut}
            >
              {isSignedIn ? 'Sign Out' : 'Sign In'}
            </Button>
            {processing && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </Hidden>
        {isSignedIn ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem disabled onClick={handleProfile}>
                {displayName}
              </MenuItem>
              <Divider />
              <MenuItem onClick={onSignInOrOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        ) : (
          <div />
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
