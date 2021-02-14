import * as React from 'react';
import { StandardProps } from '..';

export interface SpacerProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Spacer(props: SpacerProps): JSX.Element;
