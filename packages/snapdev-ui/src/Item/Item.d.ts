import * as React from 'react';
import { StandardProps } from '..';

export interface ItemProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  stretch?: boolean;
}

export default function Item(props: ItemProps): JSX.Element;
