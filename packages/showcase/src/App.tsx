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
    html: {
      margin: 0,
      padding: 0,
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: theme.palette.background.default,
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
