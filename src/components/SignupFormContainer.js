import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../store/actions/user.js";
import { Link, Redirect } from "react-router-dom";

class SignupFormPage extends React.Component {
  state = { email: "", password: "", username: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.email,
      this.state.password,
      this.state.username
    );
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    if (!this.props.userLoggedIn.jwt) {
      return (
        <div>
          <SignupForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
      );
    }
    return <Redirect to="/profile" />;
  }
}

function mapStateToProps(state) {
  return { userLoggedIn: state.userLoggedIn };
}

export default connect(mapStateToProps, { signup })(SignupFormPage);
