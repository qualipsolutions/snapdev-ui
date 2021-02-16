import * as React from 'react';
import { StandardProps, TextVariant } from '..';

export interface SectionProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  title?: string;
  center?: boolean;
  spacing?: number;
  titleVariant?: TextVariant;
}

export default function Section(props: SectionProps): JSX.Element;
