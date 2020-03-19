import React, { Component } from "react";
import { connect } from "react-redux";
import {eraseError} from "../../store/actions/error"

class ErrorAlert extends Component {

  resetError = () => {
    this.props.eraseError()
  }
  render() {
    if (!this.props.error) {
      return null;
    }
    if (this.props.error) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error! </strong>
          {this.props.error}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" onClick={this.resetError}>&times;</span>
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { error: state.error };
}

export default connect(mapStateToProps, {eraseError})(ErrorAlert);
