import * as React from 'react';
import { StandardProps } from '..';

export interface ProgressProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Progress(props: ProgressProps): JSX.Element;
