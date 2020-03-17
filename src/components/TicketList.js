import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    const displayTickets = this.props.tickets.map(ticket => {
      return (
        <tr key={ticket.id}>
          <th scope="row">{ticket.user.username}</th>
          <td>{ticket.price}</td>
          <td>{ticket.description}</td>
          <td>
            <Link
              to={`/tickets/${ticket.id}`}
              className="btn btn-info"
            >
              See Details
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>{displayTickets}</tbody>
        </table>
      </div>
    );
  }
}
