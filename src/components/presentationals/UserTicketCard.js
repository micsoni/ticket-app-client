import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserTicketCard extends Component {
  render() {
    const { ticket } = this.props;

    return (
      <div className="card ticket-list">
        <img src={ticket.pictureUrl} className="card-img-top" alt=" " />
        <div className="card-body">
          <h5 className="card-title">Price: € {ticket.price}</h5>
          <h2 className="card-text">
            {ticket.event.name} begins on {ticket.event.startDate}
          </h2>
          <p className="card-text">Description: {ticket.description}</p>

          <Link to={`/events/${ticket.eventId}`} className="btn btn-info">
            See Event
          </Link>
          <Link to={`/tickets/${ticket.id}`} className="btn btn-info">
            See Details
          </Link>
          <button className="btn btn-dark" onClick={this.props.toggleForm}>
            Edit mode
          </button>
        </div>
      </div>
    );
  }
}
