import Paper from '@material-ui/core/Paper';
import { addDecorator } from '@storybook/react';
import React from 'react';
import KnobTheme from '../src/Theme/ThemeKnob';
import { withKnobs } from '@storybook/addon-knobs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(withKnobs);
addDecorator(story => (<KnobTheme><Paper style={{padding: 10}} elevation={0}>{story()}</Paper></KnobTheme>));