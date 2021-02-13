import * as React from 'react';
import { StandardProps } from '..';

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

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
  variant?: Variant;
  color?: Color;
  display?: Display;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
}

export default function Text(props: TextProps): JSX.Element;
