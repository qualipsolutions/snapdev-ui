import * as React from 'react';
import { StandardProps, InputProps, InputMetaProps } from '..';

export interface CheckboxProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  input?: InputProps;
  label: string;
  helperText?: string;
  meta?: InputMetaProps;
  classes: any;
}

export default function Checkbox(props: CheckboxProps): JSX.Element;
