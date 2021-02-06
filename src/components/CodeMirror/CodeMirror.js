import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/selection/active-line';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import _ from 'lodash';
import React from 'react';
import ReactCodeMirror from 'react-codemirror';
import './CodeMirror.css';

const useStyles = makeStyles((theme) => ({
  helperText: {
    fontWeight: 100,
    fontSize: '0.775rem',
  },
  helperTextError: {
    // fontWeight: 100,
    color: '#f44336',
    fontSize: '0.775rem',
  },
}));

const CodeMirror = (props) => {
  const { input, meta, options, onFocus } = props;

  const { value, onChange, onBlur } = input || {};
  const { touched, error } = meta || {};

  const classes = useStyles();

  const defaultOptions = {
    theme: 'default',
    mode: { name: 'javascript', json: true },
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    extraKeys: {
      'Ctrl-Q': function (cm) {
        cm.foldCode(cm.getCursor());
      },
    },
    lineWrapping: true,
    lineNumbers: true,
    styleActiveLine: false,
    matchBrackets: true,
  };

  const mergedOptions = _.merge(defaultOptions, options);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ReactCodeMirror
          value={value}
          onChange={(newValue) => {
            if (onChange) {
              onChange(newValue);
            }
          }}
          onFocusChange={(focus) => {
            if (onFocus) {
              onFocus(focus);
            }
            if (!focus) {
              if (onBlur) {
                onBlur(value);
              }
            }
          }}
          options={mergedOptions}
        />
      </Grid>
    </Grid>
  );
};

export default CodeMirror;
