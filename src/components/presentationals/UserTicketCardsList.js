import React, { Component } from "react";
import EditTicketFormContainer from "../containers/EditTicketFormContainer";
import UserTicketCard from "./UserTicketCard";

export default class UserTicketCardsList extends Component {
  state = {
    ticketsInEdit: []
  };

  toggleForm = ticket => {
    const newState = this.state.ticketsInEdit.includes(ticket.id)
      ? this.state.ticketsInEdit.filter(id => id !== ticket.id)
      : this.state.ticketsInEdit.concat(ticket.id);

    this.setState({ ticketsInEdit: newState });
  };

  render() {
    return this.props.tickets.map(ticket => {
      const showForm = this.state.ticketsInEdit.includes(ticket.id);

      return (
        <div className="col-lg-3 col-md-6 col-12" key={ticket.id}>
          <UserTicketCard
            ticket={ticket}
            toggleForm={() => this.toggleForm(ticket)}
          />
          <div>{showForm && <EditTicketFormContainer ticket={ticket} />}</div>
        </div>
      );
    });
  }
}
