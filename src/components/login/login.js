import React, { Component } from "react";
import Input from "./input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "../../store/actions/authActions";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      submitted: false
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

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state.user;

    this.setState({ submitted: true });

    if (email && password) {
      var bodyReq = {
        email: this.state.user.email,
        password: this.state.user.password
      };

      this.props.loginUser(bodyReq, this.props.triggerAlert);
    }
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
            data={this.state.email}
            submitted={this.state.submitted}
            errorMessage="Email is required"
            onChange={this.handleChange}
          />

          <h4 className="mt-3">Password</h4>
          <Input
            icon="fas fa-key"
            type="password"
            name="password"
            placeholder="Password"
            data={this.state.password}
            submitted={this.state.submitted}
            errorMessage="Password is required"
            onChange={this.handleChange}
          />

          <div className="col text-center">
            <button
              type="submit"
              className="btn mt-3 btn-primary"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(login);
