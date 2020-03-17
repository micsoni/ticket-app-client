import React, { Component } from "react";

export default class TicketDetails extends Component {
 
  render() {
    return (
      <div className="card text-center" key={this.props.ticket.id}>
        <div className="card-header">
          Event: {this.props.ticket.event.name}
        </div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.ticket.pictureUrl}
              className="card-img"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Ticket posted by {this.props.ticket.user.username}</h4>
              <h5 className="card-title">Risk ###</h5>
              <p className="card-text">{this.props.ticket.description}</p>
              <h3 className="card-title">€ {this.props.ticket.price}</h3>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          Comments
        </div>
      </div>
    );
  }
}
