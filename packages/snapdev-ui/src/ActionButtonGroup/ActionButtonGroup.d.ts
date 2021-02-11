import * as React from 'react';
import { StandardProps } from '..';

export interface ActionButtonGroupProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function ActionButtonGroup(props: ActionButtonGroupProps): JSX.Element;
