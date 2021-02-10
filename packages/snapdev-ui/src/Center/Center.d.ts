import * as React from 'react';
import { StandardProps } from '..';

export interface CenterProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Center(props: CenterProps): JSX.Element;
