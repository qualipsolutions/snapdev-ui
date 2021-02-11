import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  panel: {
    padding: 0,
    backgroundColor: '#fff',
    boxShadow: '0 1px 1px 0 rgba(0,28,36,.5)',
    borderRadius: 0,
  },
  paperHeader: {
    minHeight: 2,
    padding: '1.3rem 2rem',
    // backgroundColor: '#fafafa',
    backgroundColor: theme.palette.background.default,
    // borderBottom: `1px solid #eaeded`,
    borderBottom: `1px solid ${theme.palette.background.default}`,
    borderRadius: 0,
  },
  paperBody: {
    minHeight: 100,
    borderRadius: 0,
  },
}));

const Panel = ({ header, body, minHeight = 100 }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.panel}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paperHeader}>{header}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ minHeight }} className={classes.paperBody}>
            {body}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Panel;
