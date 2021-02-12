import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      '& .MuiLinearProgress-colorPrimary': {
        backgroundColor: theme.palette.progress.background,
      },
      '& .MuiLinearProgress-barColorPrimary': {
        backgroundColor: theme.palette.progress.indicator,
      },
    },
  })
);

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default Progress;
