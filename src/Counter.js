import React, { Component } from 'react';

export default class Counter extends Component {

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

      </div>
    );
  }
}
