import * as React from 'react';
import { StandardProps } from '..';

export interface BreadcrumbsProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
}

export default function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
