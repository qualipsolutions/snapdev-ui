import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const DetailLabel = (props) => {
  const { label, text, noWrap = false } = props;
  return (
    <Grid item container direction="column">
      <Typography color="textSecondary" variant="body2">
        {label}
      </Typography>
      <Typography noWrap={noWrap} variant="body2">
        {text}
      </Typography>
    </Grid>
  );
};

export default DetailLabel;
