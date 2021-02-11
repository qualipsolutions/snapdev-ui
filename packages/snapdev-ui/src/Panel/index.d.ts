import * as React from 'react';
import { StandardProps } from '..';

export interface PanelProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Panel(props: PanelProps): JSX.Element;
