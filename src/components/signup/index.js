import React, { Component } from "react";
import Signup from "./signup";

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="card h-100 my-3">
          <div className="card-header">
            <h2 className="text-center">Sign up</h2>
          </div>

          <div className="card-body">
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

{
}
