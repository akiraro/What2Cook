import React, { Component } from "react";
import Input from "./input";

const config = require("../../config").link;
const axios = require("axios");

export default class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        repassword: ""
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

    if (this.validate()) {
      const link = config + "auth/signup";
      var bodyReq = {
        name: this.state.user.name,
        email: this.state.user.email,
        password: this.state.user.password
      };

      console.log(bodyReq);
      axios.post(link, bodyReq).then(response => {
        console.log(response);
        if (response.status == 200) {
          alert("Sign Up Successful !");
        } else {
          alert("Internal error");
        }
      });
    } else {
      alert("Please enter the same password");
    }
  };

  validate() {
    if (
      this.state.user.password === this.state.user.repassword &&
      this.state.user.password != ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <form>
          <h5>Name</h5>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />

          <h5 className="mt-3">Email</h5>
          <Input
            type="text"
            name="email"
            placeholder="email@domain.com"
            onChange={this.handleChange}
          />

          <h5 className="mt-3">Password</h5>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <h5 className="mt-3">Retype Password</h5>
          <Input
            type="password"
            name="repassword"
            placeholder="Retype Password"
            onChange={this.handleChange}
          />

          <div className="text-center">
            <button
              type="submit"
              className="btn mt-3 btn-primary"
              onClick={this.handleClick}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
