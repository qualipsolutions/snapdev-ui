import * as React from 'react';
import { StandardProps } from '..';

export interface ActionMenuProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: ActionButtonType[];
  onClick?: () => void;
}

export default function ActionMenu(props: ActionMenuProps): JSX.Element;
