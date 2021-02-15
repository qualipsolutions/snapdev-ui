import * as React from 'react';
import { StandardProps, ActionButton } from '..';

export interface ActionButtonGroupProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: ActionButton[];
  onClick?: () => void;
  justify?: GridJustification;
}

export default function ActionButtonGroup(
  props: ActionButtonGroupProps
): JSX.Element;
