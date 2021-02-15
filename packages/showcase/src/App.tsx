// import Text from '@snapdev-ui/core/Text';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Item } from '@snapdev-ui/core';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import AppBar from './components/AppBar';
import Text from './components/Text';
import Panel from './components/Panel';
import DataTable from './components/DataTable';
import Center from './components/Center';
import Buttons from './components/Buttons';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MenuList from './components/MenuList';
import CardList from './components/CardList';

const history = createBrowserHistory();

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

        <Container maxWidth="md">
          <div style={{ paddingTop: '8rem' }}>
            <Column spacing={10}>
              <Item>
                <CardList />
              </Item>
              <Item>
                <MenuList />
              </Item>
              <Item>
                <SignIn />
              </Item>
              <Item>
                <SignUp />
              </Item>
              <Item>
                <Buttons />
              </Item>
              <Item>
                <Panel />
              </Item>
              <Item>
                <Text />
              </Item>
              <Item>
                <DataTable />
              </Item>
              <Item>
                <Center />
              </Item>
            </Column>
          </div>
        </Container>
      </Router>
    </>
  );
};

export default App;
