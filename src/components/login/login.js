import React, { Component } from "react";

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
    console.log(value);
    this.setState({
      [name]: value
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
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-user"></i>
              </div>
            </div>

            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <h4 className="mt-3">Password</h4>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-key"></i>
              </div>
            </div>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

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
