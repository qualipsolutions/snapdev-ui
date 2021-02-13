// import Text from '@snapdev-ui/core/Text';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Center,
  Column,
  DataTable,
  Item,
  Panel,
  Text,
} from '@snapdev-ui/core';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

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

type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = (props: SectionProps) => {
  const { title, children } = props;
  return (
    <Paper style={{ padding: 20 }}>
      <Text variant="h6">{title}</Text>
      <br />
      {children}
    </Paper>
  );
};

const App = () => {
  useStyles();

  return (
    <>
      <Router history={history}>
        <AppBar title="Snapdev UI" elevation={10} position="fixed" />
        <Container maxWidth="lg">
          <div style={{ paddingTop: '8rem' }}>
            <Column spacing={10}>
              <Item>
                <Section title="Panel">
                  <Panel
                    header={<Text variant="subtitle1">Title</Text>}
                    body={
                      <Box p={4}>
                        <Text variant="body1">Body</Text>
                      </Box>
                    }
                  />
                </Section>
              </Item>
              <Item>
                <Section title="Text">
                  <Text variant="h1">
                    h1: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="h2">
                    h2: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="h3">
                    h3: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="h4">
                    h4: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="h5">
                    h5: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="h6">
                    h6: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="body1">
                    body1: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="body2">
                    body2: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <Text variant="subtitle1">
                    subtitle1: Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Text>
                  <Text variant="subtitle2">
                    subtitle2: Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Text>

                  <Text variant="overline">
                    overline: Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                  </Text>
                  <br />
                  <Text variant="caption">
                    caption: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                  <br />
                  <Text variant="button">
                    button: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </Text>
                </Section>
              </Item>

              <Item>
                <Section title="Data Table">
                  <DataTable
                    orderByField="name"
                    dataSource={{
                      head: [
                        {
                          disablePadding: true,
                          id: 'name',
                          label: 'Name',
                          numeric: false,
                          visible: true,
                        },
                        {
                          disablePadding: true,
                          id: 'href',
                          label: 'href',
                          numeric: false,
                          visible: false,
                        },
                        {
                          disablePadding: false,
                          id: 'status',
                          label: 'Status',
                          numeric: false,
                          visible: true,
                        },
                        {
                          disablePadding: false,
                          id: 'version',
                          label: 'Version',
                          numeric: false,
                          visible: true,
                        },
                        {
                          disablePadding: false,
                          id: 'createdAt',
                          label: 'Date Created',
                          numeric: false,
                          visible: true,
                        },
                      ],
                      rows: [
                        {
                          createdAt: '2021-01-01T06:05:44.189Z',
                          href: '/workflow/view/5feebbb88c914b00084c2f5f',
                          id: '5feebbb88c914b00084c2f5f',
                          name: 'Download manager',
                          status: 'Active',
                          version: 15,
                        },
                        {
                          createdAt: '2021-02-01T22:52:33.896Z',
                          href: '/workflow/view/601886314432ed00090712d9',
                          id: '601886314432ed00090712d9',
                          name: 'Product delivery',
                          status: 'Active',
                          version: 7,
                        },
                        {
                          createdAt: '2021-02-03T11:25:24.890Z',
                          href: '/workflow/view/601a88243ade6800084e0407',
                          id: '601a88243ade6800084e0407',
                          name: 'Pizza Order',
                          status: 'Active',
                          version: 1,
                        },
                      ],
                    }}
                  />
                </Section>
              </Item>

              <Item>
                <Section title="Center">
                  <Box style={{ minHeight: 250, minWidth: 100 }}>
                    <Center>
                      <Text
                        style={{ backgroundColor: 'yellow' }}
                        color="primary"
                      >
                        Item is centered
                      </Text>
                    </Center>
                  </Box>
                </Section>
              </Item>
            </Column>
          </div>
        </Container>
      </Router>
    </>
  );
};

export default App;
