import React, { Component } from "react";

export default class EventDetails extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Start Date{" "}{this.props.event.startDate} | End Date{" "}
          {this.props.event.endDate}
        </div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.event.pictureUrl}
              className="card-img"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{this.props.event.name}</h4>
              <p className="card-text">{this.props.event.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          See available tickets below
        </div>
      </div>
    );
  }
}
