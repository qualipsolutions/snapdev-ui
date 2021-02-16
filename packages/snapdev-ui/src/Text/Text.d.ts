import * as React from 'react';
import { StandardProps, TextVariant } from '..';

export type Color =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export type Display = 'initial' | 'block' | 'inline';

export interface TextProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  variant?: TextVariant;
  color?: Color;
  display?: Display;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
}

export default function Text(props: TextProps): JSX.Element;
