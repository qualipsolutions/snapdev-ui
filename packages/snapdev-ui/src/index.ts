import * as React from 'react';
import { GridSpacing } from '@material-ui/core/Grid';
import { OverridableStringUnion } from '@material-ui/types';

export type Color = 'inherit' | 'primary' | 'secondary' | 'default';

export type BreakpointDefaults = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', true>;
export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<
  BreakpointDefaults,
  BreakpointOverrides
>;
export type BreakpointValues = { [key in Breakpoint]?: number };

export interface StandardProps extends BreakpointValues {
  style?: React.CSSProperties;
  spacing?: GridSpacing;
  className?: string;
}

export interface InputProps {
  value?: string | boolean;
  onChange?: (value: string | boolean) => void;
}

export interface InputMetaProps {
  touched?: boolean;
  error?: string;
}
export type GridJustification = 'flex-start' | 'center' | 'flex-end';

export type ButtonVariant =
  | 'icon-button'
  | 'icon-only'
  | 'spinner'
  | 'button'
  | 'divider';

export type ActionButton = {
  id: string;
  submit?: boolean;
  color?: Color;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  variant?: ButtonVariant;
  processing?: boolean;
};

export type CardItem = {
  id: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  processing?: boolean;
};

export { default as CardList } from './CardList';
export { default as MenuList } from './MenuList';
export { default as Checkbox } from './Checkbox';
export { default as Section } from './Section';
export { default as Box } from './Box';
export { default as Text } from './Text';
export { default as ActionBar } from './ActionBar';
export { default as ActionButtonGroup } from './ActionButtonGroup';
export { default as ActionMenu } from './ActionMenu';
export { default as Alert } from './Alert';
export { default as Breadcrumbs } from './Breadcrumbs';
export { default as Column } from './Column';
export { default as DataTable } from './DataTable';
export { default as DetailLabel } from './DetailLabel';
export { default as Item } from './Item';
export { default as Panel } from './Panel';
export { default as Row } from './Row';
export { default as Center } from './Center';
export { default as Spacer } from './Spacer';
export { default as TextField } from './TextField';
export { DarkTheme, LightTheme } from './Theme';
export { default as AppBar } from './AppBar';
export { default as Progress } from './Progress';
