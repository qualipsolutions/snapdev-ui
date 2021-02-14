import * as React from 'react';

export interface StyleProviderProps {
  children?: NonNullable<React.ReactNode>;
}

export const StyleContext: React.Context<{
  useDarkTheme: boolean;
  switchTheme: () => void;
}>;

export default function StyleProvider(props: StyleProviderProps): JSX.Element;