import React, { Component } from "react";

export default class CommentForm extends Component {
 
  render() {
    return (
      <form>
        <div className="form-group col-sm-12">
          <label className="col-sm-2">Comment</label>
          <input
            className="form-control"
            type="textarea"
            name="text"
            onChange={this.props.onChange}
            value={this.props.values.text}
          />
        </div>
        <button className="btn btn-info" onClick={this.props.onSubmit}>
          Send Comment
        </button>
      </form>
    );
  }
}
