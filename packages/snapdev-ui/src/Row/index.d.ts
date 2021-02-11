import * as React from 'react';
import { StandardProps } from '..';

export interface RowProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Row(props: RowProps): JSX.Element;
