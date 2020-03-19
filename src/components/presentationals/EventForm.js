import React, { Component } from "react";

export default class EventForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group col-sm-6">
          <label className="col-sm-2">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.props.onChange}
            value={this.props.values.name}
          />
        </div>
        <div className="form-group col-sm-6">
          <label className="col-sm-2">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={this.props.onChange}
            value={this.props.values.description}
          />
        </div>
        <div className="form-group col-sm-6">
          <label className="col-sm-2">Image Url </label>
          <input
            className="form-control"
            type="text"
            name="pictureUrl"
            onChange={this.props.onChange}
            value={this.props.values.pictureUrl}
          />
        </div>
        <div className="form-group col-sm-6">
          <label className="col-sm-2">Start Date </label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            onChange={this.props.onChange}
            value={this.props.values.startDate}
          />
        </div>
        <div className="form-group col-sm-6">
          <label className="col-sm-2">End Date </label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            onChange={this.props.onChange}
            value={this.props.values.endDate}
          />
        </div>
        <button className="btn btn-info" onClick={this.props.onSubmit}>
          Create new event
        </button>
      </form>
    );
  }
}
