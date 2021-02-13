import * as React from 'react';
import { StandardProps } from '..';

export interface BoxProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Box(props: BoxProps): JSX.Element;
