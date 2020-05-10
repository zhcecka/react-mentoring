import * as React from 'react';
import { First } from './firstTypeComponent';
import { Second } from './secondTypeComponent';
import { Third } from './thirdTypeComponent';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps): any => [
  <h1 key="functional">
    Hello from {props.compiler} and {props.framework}!
  </h1>,
  First,
  <Second key="second" type="React.Component" />,
  <Third key="third" type="React.PureComponent" />,
];
