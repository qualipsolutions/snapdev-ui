import * as React from 'react';
import { StandardProps } from '..';

export interface ActionBarProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function ActionBar(props: ActionBarProps): JSX.Element;
