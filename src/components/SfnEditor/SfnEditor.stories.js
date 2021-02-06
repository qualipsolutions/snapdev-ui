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
    value: `{
"Comment": "Workflow",
"StartAt": "Initialize",
"States": {
  "Initialize": {
    "Type": "Task",
    "Resource": "arn:aws:states:::lambda:invoke",
    "TimeoutSeconds": 10,
    "Parameters": {
      "FunctionName": "arn:aws:lambda:eu-west-1:116844974399:function:snapflow-service-dev-passAction:$LATEST",
      "Payload": {
        "State.$": "$$.State.Name",
        "InputBuilder": {},
        "Input.$": "$"
      }
    },
    "OutputPath": "$.Payload",
    "Next": "Process Task"
  },
  "Process Task": {
    "Type": "Pass",
    "Result": "Processing done",
    "Next": "Finalize"
  },
  "Finalize": {
    "Type": "Task",
    "Resource": "arn:aws:states:::lambda:invoke",
    "TimeoutSeconds": 10,
    "Parameters": {
      "FunctionName": "arn:aws:lambda:eu-west-1:116844974399:function:snapflow-service-dev-passAction:$LATEST",
      "Payload": {
        "State.$": "$$.State.Name",
        "InputBuilder": {},
        "Input.$": "$"
      }
    },
    "OutputPath": "$.Payload",
    "End": true
  }
}`,
  },
};
