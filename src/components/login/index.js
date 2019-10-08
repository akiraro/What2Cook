import React, { Component } from "react";
import Login from "./login";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: false
    };
    this.triggerAlert = this.triggerAlert.bind(this);
  }

  triggerAlert() {
    this.setState({
      loginStatus: true
    });
  }

  render() {
    return (
      <div>
        {this.state.loginStatus ? (
          <div className="alert alert-primary mt-2 text-center" role="alert">
            <h4>Login Successful</h4>
            Redirecting ....
          </div>
        ) : null}

        <div className="card h-100 my-3">
          <div className="card-header">
            <h2 className="text-center">Login</h2>
          </div>

          <div className="card-body">
            <Login triggerAlert={this.triggerAlert} />
            <div className="col text-center mt-2">
              <a className="" href="#">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="card-footer">
            <div className="col text-center">
              Not a member ?{"\t"}
              <a className="" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
}
