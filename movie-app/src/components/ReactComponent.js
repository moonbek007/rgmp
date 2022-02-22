import React from "react";

export default class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
