import {
  borders,
  ComposedStyleFunction,
  display,
  flexbox,
  grid,
  palette,
  positions,
  PropsFor,
  shadows,
  sizing,
  spacing,
  typography,
} from '@material-ui/system';
import * as React from 'react';
import { StandardProps } from '..';

type BoxStyleFunction = ComposedStyleFunction<
  [
    typeof borders,
    typeof display,
    typeof flexbox,
    typeof grid,
    typeof palette,
    typeof positions,
    typeof shadows,
    typeof sizing,
    typeof spacing,
    typeof typography
  ]
>;

type SystemProps = PropsFor<BoxStyleFunction>;
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, keyof SystemProps>;

export interface BoxProps extends StandardProps, ElementProps, SystemProps {
  // children?: NonNullable<React.ReactNode>;
}

export default function Box(props: BoxProps): JSX.Element;
