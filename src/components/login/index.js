import React, { Component } from "react";
import Login from "./login";
import Signup from "../signup/signup";

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card h-100 my-3">
        <div className="card-header">
          <h2 className="text-center">Login</h2>
        </div>

        <div className="card-body">
          <Login />
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
    );
  }
}

{
}
