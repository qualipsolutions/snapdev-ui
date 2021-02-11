import * as React from 'react';
import { StandardProps } from '..';

export interface DataTableProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function DataTable(props: DataTableProps): JSX.Element;
