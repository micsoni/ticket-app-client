import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TicketCardsList extends Component {
  render() {
    const displayTickets = this.props.tickets.map(ticket => {
      function showTicketRisk() {
        if (ticket.risk < 10) {
          return "table-success";
        }
        if (ticket.risk >= 10 && ticket.risk < 40) {
          return "table-warning";
        }
        return "table-danger";
      }

      const bgColor = showTicketRisk();

      return (
        <div className="col-lg-2 col-md-3 col-6" key={ticket.id}>
          <div className="card ticket-list">
            <img src={ticket.pictureUrl} className="card-img-top" alt=" " />
            <div className="card-body">
              <h5 className="card-title">Price: € {ticket.price}</h5>
              <h5 className={bgColor}>Risk: {ticket.risk}</h5>
              <Link to={`/tickets/${ticket.id}`} className="btn btn-info">
                See Details
              </Link>
              <Link to={`/events/${ticket.eventId}`} className="btn btn-info">
                See Event
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{displayTickets}</div>;
  }
}
