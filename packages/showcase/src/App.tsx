// import Text from '@snapdev-ui/core/Text';
import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import { Router, Switch, Route } from 'react-router-dom';
import { Progress } from '@snapdev-ui/core';
import history from './history';

const ComponentsPage = lazy(() => import('./pages/Components'));
const InboxPage = lazy(() => import('./pages/Inbox'));

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      // '-moz-osx-font-smoothing': 'grayscale',
      // overflowY: 'scroll',
      margin: 0,
      padding: 0,
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: theme.palette.background.default,
      height: '100%',
      overflow: 'auto',
      position: 'relative',
    },
  },
}));

const App = () => {
  useStyles();

  return (
    <>
      <Router history={history}>
        <AppBar />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/" exact>
              <ComponentsPage />
            </Route>
            <Route path="/dashboard" exact>
              <ComponentsPage />
            </Route>
            <Route path="/inbox" exact>
              <InboxPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
