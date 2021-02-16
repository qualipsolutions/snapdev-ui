import * as React from 'react';
import { StandardProps } from '..';

export interface RowProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  heightOffset?: string;
  stretch?: boolean;
}

export default function Row(props: RowProps): JSX.Element;
