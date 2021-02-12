import * as React from 'react';
import { StandardProps, Color } from '..';

export interface AppBarProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  handleTabChange?: (href) => void;
  handleSignOut?: () => void;
  handleSignIn?: () => void;
  title?: string;
  isSignedIn?: boolean;
  email?: string;
  processing?: boolean;
  appName?: string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  color?: Color;
  appIndex?: PropTypes.number;
  elevation?: PropTypes.number;
  apps?: PropTypes.array;
}

export default function AppBar(props: AppBarProps): JSX.Element;
