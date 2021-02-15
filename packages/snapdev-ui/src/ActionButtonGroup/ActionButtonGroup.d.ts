import * as React from 'react';
import { StandardProps, ActionButtonType } from '..';

export interface ActionButtonGroupProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: ActionButtonType[];
  onClick?: () => void;
  justify?: GridJustification;
}

export default function ActionButtonGroup(
  props: ActionButtonGroupProps
): JSX.Element;
