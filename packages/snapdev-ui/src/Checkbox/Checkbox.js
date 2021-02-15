import React, { useState, useEffect } from 'react';
import Text from '../Text';

import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MuiCheckbox from '@material-ui/core/Checkbox';
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

const Checkbox = (props) => {
  const { input, label, helperText, meta } = props;
  const { value, onChange } = input || {};
  const { touched, error } = meta || {};
  const [checked, setChecked] = useState(value || false);

  const classes = useStyles();

  const handleChange = (event) => {
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

  return (
    <FormControl error={error !== undefined} component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <MuiCheckbox
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

export default Checkbox;
