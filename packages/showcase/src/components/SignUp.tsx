import React, { useState, useEffect } from 'react';
import {
  Section,
  Box,
  TextField,
  Text,
  InputProps,
  InputMetaProps,
} from '@snapdev-ui/core';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  helperText: {
    color: theme.palette.text.hint,
    fontWeight: 100,
    fontSize: '0.775rem',
    paddingTop: 4,
  },
  error: {
    color: theme.palette.error.main,
  },
}));

type RenderCheckboxProps = {
  input?: InputProps;
  label: string;
  helperText?: string;
  meta?: InputMetaProps;
  classes: any;
};

const RenderCheckbox = (props: RenderCheckboxProps) => {
  const { input, label, helperText, meta, classes } = props;
  const { value, onChange } = input || {};
  const { touched, error } = meta || {};
  const [checked, setChecked] = useState(value || false);

  const handleChange = (event: any) => {
    // console.log(event);
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  useEffect(() => {
    setChecked(checked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  console.log('Render checkbox: ', checked);
  return (
    <FormControl error={error !== undefined} component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!checked}
              onChange={handleChange}
              color="primary"
              size="small"
            />
          }
          label={
            <Text
              variant="subtitle2"
              style={{ fontWeight: 100, fontSize: '0.775rem' }}
            >
              {label}
            </Text>
          }
        />
      </FormGroup>
      <FormHelperText>{touched ? error || null : null}</FormHelperText>
      <Text
        variant="body2"
        className={classNames(classes.helperText, {
          [classes.error]: touched && error !== undefined,
        })}
      >
        {helperText}
      </Text>
    </FormControl>
  );
};

const Component = () => {
  const classes = useStyles();
  return (
    <Section title="Sign Up">
      <Box p={2}>
        <TextField
          fullWidth
          label="Snapflow ID (username)"
          helperText="Must be between 4 and 30 characters long, and can only contain numbers, lowercase letters and hyphens."
        />
        <TextField fullWidth label="Email Address" helperText="" />
        <TextField
          fullWidth
          label="Password"
          helperText="Must be between 6 and 30 characters long"
          meta={{
            touched: true,
            error: 'Field is required',
          }}
        />
        <br />
        <RenderCheckbox
          label="I have read and agree to the Terms of Service, Privacy Policy, and Data Processing Terms."
          input={{ value: true }}
          classes={classes}
          helperText="You must accept to continue"
          meta={{
            touched: true,
            error: 'Field is required',
          }}
        />
        <TextField fullWidth label="Confirm Password" helperText="" />
        <br />
        <br />
        <div style={{}}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={false}
            style={{}}
          >
            Sign In
          </Button>
        </div>
      </Box>
    </Section>
  );
};
export default Component;
