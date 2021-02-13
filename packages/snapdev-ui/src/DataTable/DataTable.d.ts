import * as React from 'react';
import { StandardProps } from '..';

export interface DataTableProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  orderByField?: string;
  dataSource?: object;
  onSelectedRow?: () => void;
  onDeselectedRow?: () => void;
  navigator?: object;
  rowsPerPage?: number;
}

export default function DataTable(props: DataTableProps): JSX.Element;
