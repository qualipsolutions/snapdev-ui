import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  helperText: {
    // color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 100,
    fontSize: '0.775rem',
  },
  error: {
    color: '#f44336',
  },
}));

const TextField = (props) => {
  const {
    input,
    label,
    helperText,
    fullWidth = false,
    meta,
    ...custom
  } = props;

  const { touched, error } = meta || {};

  const classes = useStyles();

  return (
    <>
      <MuiTextField
        {...input}
        {...custom}
        label={label}
        error={touched && error !== undefined}
        helperText={touched ? error || null : null}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth={fullWidth}
      />
      <Typography
        variant="body2"
        component="h2"
        className={classNames(classes.helperText, {
          [classes.error]: touched && error !== undefined,
        })}
      >
        {helperText}
      </Typography>
    </>
  );
};

export default TextField;
