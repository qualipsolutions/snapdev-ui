import * as React from 'react';
import { StandardProps } from '..';

export interface DetailLabelProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function DetailLabel(props: DetailLabelProps): JSX.Element;
