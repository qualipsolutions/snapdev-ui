import * as React from 'react';
import { StandardProps, InputMetaProps, InputProps } from '..';

export interface TextFieldProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  input?: InputProps;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  meta?: InputMetaProps;
}

export default function TextField(props: TextFieldProps): JSX.Element;
