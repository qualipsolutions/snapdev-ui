import * as React from 'react';
import { StandardProps } from '..';

export interface PanelProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  body: NonNullable<React.ReactNode>;
  header: NonNullable<React.ReactNode>;
  minHeight?: number;
}

export default function Panel(props: PanelProps): JSX.Element;
