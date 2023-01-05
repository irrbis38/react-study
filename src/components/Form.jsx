import React, { Component } from "react";

export class Form extends Component {
  state = {
    firstName: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
