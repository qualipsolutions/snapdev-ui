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

export interface TextProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  variant?: Variant;
}

export default function Text(props: TextProps): JSX.Element;
