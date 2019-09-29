import React, { Component } from "react";
import Input from "./input";

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <h4>Email</h4>
          <Input
            icon="fas fa-user"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <h4 className="mt-3">Password</h4>
          <Input
            icon="fas fa-key"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <div className="col text-center">
            <button
              type="submit"
              className="btn mt-3 btn-primary"
              onClick={this.handleClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
