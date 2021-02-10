import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
  },
  buttonContained: {
    backgroundColor: '#fff',
  },
  iconButtonContained: {
    backgroundColor: '#fff',
  },
  iconButtonRoot: {
    padding: '0.5rem',
    // backgroundColor: '#fff',
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  },
  spinnerButtonWrapper: {
    // margin: theme.spacing(1),
    position: 'relative',
  },
  circularProgress: {
    color: blue[500],
    position: 'absolute',
    top: '18%',
    left: '50%',
    marginLeft: -12,
  },
}));

/**
 * const buttons = [{
       id: 'create',
      label: 'Create workflow',
      color: 'primary',
      disabled: false,
      icon: <AddIcon />,
    },
 * ];
 * <ActionButtonGroup buttons={buttons} onClick={handleActionClick}/>
 * 
 * @param { buttons } props 
 */
const ActionButtonGroup = (props) => {
  const classes = useStyles();

  const { buttons, onClick, justify = 'flex-start' } = props;

  const renderButtonType = ({
    id,
    submit = false,
    color,
    disabled = false,
    icon,
    label = '',
    variant = 'icon-button',
    processing = false,
  }) => {
    const buttonProps = {};
    if (!submit) {
      buttonProps.onClick = () => {
        if (onClick) onClick({ id });
      };
    }

    /**
     * variant: 
      - icon-button (default)
      - icon-only
      - spinner-button
      - button
    */

    if (variant === 'icon-only') {
      return (
        <Button
          variant="contained"
          type={submit && submit === true ? 'submit' : 'button'}
          color={color}
          disabled={disabled || false}
          classes={{
            root: classes.iconButtonRoot,
            contained: color ? '' : classes.iconButtonContained,
          }}
          startIcon={icon}
          {...buttonProps}
        />
      );
    }
    if (variant === 'spinner') {
      return (
        <div className={classes.spinnerButtonWrapper}>
          <Button
            variant="contained"
            type={submit && submit === true ? 'submit' : 'button'}
            color={color}
            disabled={processing || disabled}
            classes={{ contained: color ? '' : classes.iconButtonContained }}
            startIcon={icon}
            {...buttonProps}
          >
            {label}
          </Button>
          {processing && <CircularProgress size={24} className={classes.circularProgress} />}
        </div>
      );
    }
    return (
      <Button
        variant="contained"
        type={submit && submit === true ? 'submit' : 'button'}
        color={color}
        disabled={disabled || false}
        classes={{ contained: color ? '' : classes.buttonContained }}
        startIcon={icon}
        {...buttonProps}
      >
        {label}
      </Button>
    );
  };

  return (
    <Grid container spacing={1} justify={justify}>
      {buttons.map((button) => (
        <Grid item key={button.id}>
          {renderButtonType({ ...button, classes })}
        </Grid>
      ))}
    </Grid>
  );
};

export default ActionButtonGroup;
