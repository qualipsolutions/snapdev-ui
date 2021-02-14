import * as React from 'react';
import { StandardProps } from '..';

export type GridJustification = 'flex-start' | 'center' | 'flex-end';

export interface ActionButtonGroupProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: any[];
  onClick?: () => void;
  justify?: GridJustification;
}

export default function ActionButtonGroup(
  props: ActionButtonGroupProps
): JSX.Element;
