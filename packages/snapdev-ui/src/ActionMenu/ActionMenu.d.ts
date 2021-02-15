import * as React from 'react';
import { StandardProps, ActionButton } from '..';

export interface ActionMenuProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: ActionButton[];
  onClick?: () => void;
}

export default function ActionMenu(props: ActionMenuProps): JSX.Element;
