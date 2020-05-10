import * as React from 'react';

export class Second extends React.Component<{ type: string }> {
  render(): any {
    return <h1>This component was created using {this.props.type}</h1>;
  }
}
