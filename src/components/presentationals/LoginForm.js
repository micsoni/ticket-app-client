import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="card text-center">
        <p>Log in to access your profile</p>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group col-12">
            <label className="col-sm-2">Email</label>
            <input
              type="text"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
            />
          </div>
          <div className="form-group col-12">
            <label className="col-sm-2">Password</label>
            <input
              type="text"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
            />
          </div>

          <button type="submit" className="btn btn-info">
            Login
          </button>
        </form>
      </div>
    );
  }
}
