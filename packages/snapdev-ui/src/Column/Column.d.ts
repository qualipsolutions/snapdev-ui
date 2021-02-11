import * as React from 'react';
import { StandardProps } from '..';

export interface ColumnProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Column(props: ColumnProps): JSX.Element;
