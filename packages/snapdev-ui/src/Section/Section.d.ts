import * as React from 'react';
import { StandardProps } from '..';

export interface SectionProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  title: string;
  center?: boolean;
}

export default function Section(props: SectionProps): JSX.Element;
