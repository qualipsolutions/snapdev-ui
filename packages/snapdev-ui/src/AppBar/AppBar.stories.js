import React from 'react';
import AppBar from './AppBar';

import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SIGN_OUT = 'SIGN_OUT';
const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';
const PROCESSING_START = 'PROCESSING_START';
const PROCESSING_END = 'PROCESSING_END';
const SET_APP = 'SET_APP';

const AUTH_INTIAL_STATE = {
  error: null,
  user: null,
  processing: false,
  isSignedIn: false,
};

const authReducer = (state = AUTH_INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null, error: null };
    case SET_CURRENT_USER:
      return { ...state, isSignedIn: true, user: action.payload, error: null };
    case ADD_ERROR:
      return { ...state, error: action.payload };
    case REMOVE_ERROR:
      return { ...state, error: null };
    case PROCESSING_START:
      return { ...state, processing: true };
    case PROCESSING_END:
      return { ...state, processing: false };
    default:
      return state;
  }
};

const APP_INTIAL_STATE = {
  appIndex: 0,
  appName: 'Dashboard',
  apps: [
    {
      path: '/dashboard',
      title: 'Dashboard',
    },
    {
      path: '/workflow',
      title: 'Workflow',
    },
  ],
};

const appReducer = (state = APP_INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_APP: {
      // console.log(action);
      const path = action.payload.toLowerCase().split('/')[1];
      const index = state.apps.findIndex(
        (i) => i.path.toLowerCase().split('/')[1] === path
      );
      if (index > -1) {
        return {
          ...state,
          ...action.payload,
          appIndex: index,
          appName: state.apps[index].title,
        };
      }
      return { ...state };
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const history = createBrowserHistory();

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
};

const Template = (args) => (
  <Provider store={store}>
    <Router history={history}>
      <AppBar {...args} />
    </Router>
  </Provider>
);

export const Basic = Template.bind({});
Basic.args = {
  handleTabChange: (href) => {
    console.log({ href });
  },
  handleSignOut: () => {
    console.log('Sign out');
  },
  handleSignIn: () => {
    console.log('Sign In');
  },
};
