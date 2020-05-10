import * as React from 'react';

export class Third extends React.PureComponent<{ type: string }> {
  render(): any {
    return <h1>This component was created using {this.props.type}</h1>;
  }
}
