import React, { Component } from "react";

export default class TicketForm extends Component {
  render() {
    return (
      <form >
        <div className="form-group col-sm-12">
          <label className="col-sm-2">Price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            onChange={this.props.onChange}
            value={this.props.values.price}
          />
        </div>
        <div className="form-group col-sm-12">
          <label className="col-sm-2">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={this.props.onChange}
            value={this.props.values.description}
          />
        </div>
        <div className="form-group col-sm-12">
          <label className="col-sm-2">Image Url </label>
          <input
            className="form-control"
            type="text"
            name="pictureUrl"
            onChange={this.props.onChange}
            value={this.props.values.pictureUrl}
          />
        </div>
        <button className="btn btn-info" onClick={this.props.onSubmit}>
          Save changes
        </button> 
        <button className="btn btn-dark" onClick={this.props.onDelete}>
          Delete ticket
        </button>
      </form>
    );
  }
}
