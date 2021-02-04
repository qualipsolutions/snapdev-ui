import React from 'react';
import DetailLabel from './DetailLabel';

export default {
  title: 'Form/DetailLabel',
  component: DetailLabel,
};

export const Basic = () => <DetailLabel label="Application Name" text="Snapdev UI Component" />;

export const WithNoWrap = () => <DetailLabel label="Application Name" text="Snapdev UI Component" noWrap={false} />;

export const WithWrap = () => <DetailLabel label="Application Name" text="Snapdev UI Component" noWrap />;
