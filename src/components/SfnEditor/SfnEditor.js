import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useResizeAware from 'react-resize-aware';
import CodeMirror from '../CodeMirror/CodeMirror';
import Panel from '../Panel/Panel';
// import AWSSfnGraph from './aws-sfn-graph';
// import './aws-sfn-graph/index.css';

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

const SfnEditor = (props) => {
  // console.log(props);
  const { title, input, meta, loading, graphHeight = 650, readOnly } = props;
  const { value } = input || {};
  const { touched, error } = meta || {};

  const classes = useStyles();

  const [resizeListener, sizes] = useResizeAware();

  return (
    <Panel
      minHeight={graphHeight}
      header={<Typography variant="h6">{title}</Typography>}
      body={
        loading ? (
          <Box pt={3} display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container>
            <Grid item xs={12} container>
              <Grid item xs={12} md={6}>
                <div className="workflow-editor">
                  <CodeMirror
                    input={{ ...input }}
                    meta={{ ...meta }}
                    options={{
                      readOnly: readOnly ? 'nocursor' : false,
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} style={{ overflow: 'auto', position: 'relative', border: '1px solid #eaeded' }}>
                {resizeListener}
                {/* <AWSSfnGraph data={value} width={sizes.width} height={graphHeight} /> */}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Box
                height={20}
                pt={2}
                pl={5}
                pr={5}
                pb={2}
                style={{ border: '1px solid #eaeded', backgroundColor: '#f7f7f7' }}
              >
                <Typography variant="body2" component="h2" className={classes.helperTextError}>
                  {touched ? error || null : null}
                  {/* The JSON is not valid */}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )
      }
    />
  );
};

export default SfnEditor;
