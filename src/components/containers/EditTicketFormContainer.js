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
    this.props.updateTicket(this.props.ticket.id, this.state);
  };

  onDelete = event => {
    event.preventDefault();
    this.props.deleteTicket(this.props.ticket.id);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          onDelete={this.onDelete}
          showEditMode={true}
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
