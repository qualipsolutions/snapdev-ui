import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ActionButtonGroup from '../ActionButtonGroup/ActionButtonGroup';
import ActionMenu from '../ActionMenu/ActionMenu';

const useStyles = makeStyles((theme) => ({
  spinnerBoxRoot: {
    padding: 0,
  },
}));

const ActionBar = (props) => {
  const { buttons, onClick, loading, processing } = props;

  const classes = useStyles();

  return (
    <>
      <Hidden mdUp>
        {processing ? (
          <Box
            classes={{ root: classes.spinnerBoxRoot }}
            pt={10}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <CircularProgress size={24} />
          </Box>
        ) : (
          <ActionMenu
            onClick={onClick}
            buttons={buttons.map((i) => {
              if (loading) {
                return { ...i, disabled: true };
              }
              if (processing || i.processing) {
                return { ...i, disabled: true, processing: true };
              }
              return { ...i };
            })}
          />
        )}
      </Hidden>
      <Hidden smDown>
        <ActionButtonGroup
          onClick={onClick}
          buttons={buttons.map((i) => {
            if (loading && !i.alwaysActive) {
              return { ...i, disabled: true };
            }
            if (processing || i.processing) {
              return { ...i, disabled: true, processing: true };
            }
            return { ...i };
          })}
        />
      </Hidden>
    </>
  );
};

export default ActionBar;
