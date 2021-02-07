import React from 'react';
import CodeMirror from './CodeMirror';

export default {
  title: 'Code Editor/CodeMirror',
  component: CodeMirror,
};

const Template = (args) => <CodeMirror {...args} />;

export const Basic = Template.bind({});
Basic.args = {
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

export const Readonly = Template.bind({});
Readonly.args = {
  ...Basic.args,
  options: {
    readOnly: 'nocursor',
  },
};
