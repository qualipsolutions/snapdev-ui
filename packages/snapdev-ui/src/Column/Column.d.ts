import * as React from 'react';
import { StandardProps } from '..';

export interface ColumnProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  heightOffset?: string;
  stretch?: boolean;
}

export default function Column(props: ColumnProps): JSX.Element;
