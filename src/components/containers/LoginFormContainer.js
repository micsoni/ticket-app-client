import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../store/actions/user.js";
import LoginForm from "../presentationals/LoginForm";
import "./styling/FormsContainer.css";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
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
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
          <p>
            Not a member yet? <Link to="/signup">Join us</Link>
          </p>
        </div>
      );
    }
    return <Redirect to="/profile" />;
  }
}

function mapStateToProps(state) {
  return { userLoggedIn: state.user.loginInfo };
}

export default connect(mapStateToProps, { login })(LoginFormContainer);
