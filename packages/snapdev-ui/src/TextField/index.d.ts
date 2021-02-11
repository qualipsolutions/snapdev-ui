import * as React from 'react';
import { StandardProps } from '..';

export interface TextFieldProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function TextField(props: TextFieldProps): JSX.Element;
