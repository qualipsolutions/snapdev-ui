import React from 'react';
import SfnEditor from './SfnEditor';

export default {
  title: 'Code Editor/SfnEditor',
  component: SfnEditor,
};

const Template = (args) => <SfnEditor {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'AWS State Language Editor',
  input: {
    value: JSON.stringify(
      {
        Comment: 'A Hello World example of the Amazon States Language using Pass states',
        StartAt: 'Hello',
        States: {
          Hello: {
            Type: 'Pass',
            Result: 'Hello',
            Next: 'World',
          },
          World: {
            Type: 'Pass',
            Result: 'World',
            End: true,
          },
        },
      },
      null,
      2
    ),
  },
};
