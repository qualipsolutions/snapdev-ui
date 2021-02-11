import * as React from 'react';
import { StandardProps } from '..';

export interface AlertProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Alert(props: AlertProps): JSX.Element;
