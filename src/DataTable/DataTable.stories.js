/* eslint-disable no-alert */
import React from 'react';
import DataTable from './DataTable';

export default {
  title: 'Form/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  dataSource: {
    head: [
      {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
        visible: true,
      },
      {
        id: 'href',
        numeric: false,
        disablePadding: true,
        label: 'href',
        visible: false,
      },
      {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
        visible: true,
      },
      {
        id: 'version',
        numeric: false,
        disablePadding: false,
        label: 'Version',
        visible: true,
      },
      {
        id: 'createdAt',
        numeric: false,
        disablePadding: false,
        label: 'Date Created',
        visible: true,
      },
    ],
    rows: [
      {
        id: '5feebbb88c914b00084c2f5f',
        name: 'Download manager',
        href: '/workflow/view/5feebbb88c914b00084c2f5f',
        status: 'Active',
        version: 15,
        createdAt: '2021-01-01T06:05:44.189Z',
      },
      {
        id: '601886314432ed00090712d9',
        name: 'Product delivery',
        href: '/workflow/view/601886314432ed00090712d9',
        status: 'Active',
        version: 7,
        createdAt: '2021-02-01T22:52:33.896Z',
      },
      {
        id: '601a88243ade6800084e0407',
        name: 'Pizza Order',
        href: '/workflow/view/601a88243ade6800084e0407',
        status: 'Active',
        version: 1,
        createdAt: '2021-02-03T11:25:24.890Z',
      },
    ],
  },
};

export const orderByField = Template.bind({});
orderByField.args = {
  ...Basic.args,
  orderByField: 'name',
};

export const SelectionEvents = Template.bind({});
SelectionEvents.args = {
  ...Basic.args,
  onSelectedRow: (row) => {
    alert('Selected');
  },
  onDeselectedRow: () => {
    alert('Unselected');
  },
};
