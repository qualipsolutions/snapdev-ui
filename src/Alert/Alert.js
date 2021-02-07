import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import React from 'react';

const Alert = (props) => {
  const { message, severity, title, onClose } = props;
  return (
    <MuiAlert severity={severity} variant="filled" onClose={onClose}>
      {title ? <AlertTitle>{title}</AlertTitle> : <div />}

      {message}
    </MuiAlert>
  );
};

export default Alert;
