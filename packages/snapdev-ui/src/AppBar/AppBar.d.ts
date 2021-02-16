import * as React from 'react';
import { StandardProps, Color } from '..';

export interface AppBarProps extends StandardProps {
  children?: NonNullable<React.ReactNode>;
  handleTabChange?: (href: string) => void;
  handleSignOut?: () => void;
  handleSignIn?: () => void;
  title?: string;
  isSignedIn?: boolean;
  displayName?: string;
  processing?: boolean;
  appName?: string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  color?: Color;
  appIndex?: PropTypes.number;
  elevation?: PropTypes.number;
  apps?: PropTypes.array;
  themeSwitcher?: boolean;
}

export default function AppBar(props: AppBarProps): JSX.Element;
