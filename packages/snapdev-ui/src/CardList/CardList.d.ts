import * as React from 'react';
import { StandardProps, CardItem } from '..';

export interface CardListProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  items: CardItem[];
  onClick?: (id: string) => void;
}

export default function CardList(props: CardListProps): JSX.Element;
