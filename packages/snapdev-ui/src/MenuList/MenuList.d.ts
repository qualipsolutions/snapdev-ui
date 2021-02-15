import * as React from 'react';
import { StandardProps, ActionButtonType } from '..';

export interface MenuListProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  buttons: ActionButtonType[];
  onClick?: (id: string) => void;
}

export default function MenuList(props: MenuListProps): JSX.Element;
