import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTicket, deleteTicket } from "../../store/actions/ticket";
import TicketForm from "../presentationals/TicketForm";

class EditTicketFormContainer extends Component {
  state = {
    price: this.props.ticket.price,
    description: this.props.ticket.description,
    pictureUrl:this.props.ticket.pictureUrl
  };

  onSubmit = event => {
    event.preventDefault();

    const update = {
      price: this.state.price,
      description: this.state.description,
      pictureUrl: this.state.pictureUrl
    };

    this.props.updateTicket(this.props.ticket.id, update);
  };

  onDelete = event => {
    event.preventDefault();
    this.props.deleteTicket(this.props.ticket.id);
  };
  onChange = event => {
    const { value, name } = event.target;
    const update = { [name]: value };

    this.setState(update);
  };

  render() {
    return (
      <div>
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
const mapDispatchToProps = {
  updateTicket,
  deleteTicket
};
export default connect(null, mapDispatchToProps)(EditTicketFormContainer);
