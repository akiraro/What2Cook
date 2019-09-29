import React, { Component } from "react";

export default class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
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

          <div className="input-group mt-3">
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
          <div className="text-center">
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
