// import Text from '@snapdev-ui/core/Text';
import { Text, Row, Spacer, Item, DataTable } from '@snapdev-ui/core';

import Paper from '@material-ui/core/Paper';

import React from 'react';

function App() {
  return (
    <div style={{ padding: 10 }}>
      <Paper style={{ padding: 20 }}>
        <Text variant="h3">Components</Text>
        <br />
        <Row spacing={3}>
          <Item>
            <br />
            <Text variant="subtitle1">Option1: Default import</Text>
            <Text variant="body2">
              import Text from '@snapdev-ui/core/Text';
            </Text>
            <br />
            <Text variant="subtitle1">Option2: Named import</Text>
            <Text variant="body2">
              {"import { Text } from '@snapdev-ui/core';"}
            </Text>
          </Item>
          <Spacer />
          <Item>
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
          </Item>
        </Row>
      </Paper>
    </div>
  );
}

export default App;
