import * as React from 'react';
import { StandardProps } from '..';

export interface BreadcrumbsProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  links?: { title: string; link?: string }[];
  navigator?: {
    push: (link) => void;
  };
  onNavigate?: (link) => void;
}

export default function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
