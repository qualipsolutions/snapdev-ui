import {
  Section,
  MenuList,
  Item,
  Row,
  DataTable,
  Breadcrumbs,
  Column,
  Text,
} from '@snapdev-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';

export interface ComponentsProps {}

const Components: React.FunctionComponent<ComponentsProps> = () => {
  return (
    <div
      style={{ paddingTop: '6rem', paddingLeft: '1rem', paddingRight: '1rem' }}
    >
      <Column>
        <Item>
          <Breadcrumbs
            links={[
              {
                link: '/dashboard',
                title: 'Dashboard',
              },
              {
                link: '/workflow',
                title: 'Workflows',
              },
              {
                title: 'Create workflow',
              },
            ]}
          />
          <br />
        </Item>
        <Item>
          <Text variant="h3" color="primary">
            Inbox
          </Text>
          <br />
        </Item>
        <Item>
          <Row stretch heightOffset="13rem" spacing={2}>
            <Item
              xs={12}
              sm={6}
              md={2}
              style={{ backgroundColor: 'transparent' }}
            >
              <Section spacing={0}>
                {/* <Box> */}
                <MenuList
                  onClick={(id) => {
                    console.log({ id });
                  }}
                  buttons={[
                    {
                      id: 'inbox',
                      label: 'Inbox',
                      icon: <InboxIcon />,
                    },
                    {
                      id: 'divider1',
                      variant: 'divider',
                    },
                    {
                      id: 'sent',
                      label: 'Review',
                      icon: <SendIcon />,
                    },
                    {
                      id: 'approval',
                      label: 'Store Approval',
                      icon: <DraftsIcon />,
                    },
                    {
                      id: 'divider2',
                      variant: 'divider',
                    },
                    {
                      id: 'reject',
                      label: 'Rejected',
                      icon: <DeleteIcon />,
                    },
                  ]}
                />
                {/* </Box> */}
              </Section>
            </Item>
            <Item xs={12} sm={6} md={10}>
              <Section spacing={0}>
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
          </Row>
        </Item>
      </Column>
    </div>
  );
};

export default Components;
