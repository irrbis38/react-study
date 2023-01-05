import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  counterIncrease = () => {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => console.log("State is changed")
    );
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));

    console.log("Before state will change");
  };

  counterDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.counterDecrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.counterIncrease}>+</button>
      </div>
    );
  }
}
