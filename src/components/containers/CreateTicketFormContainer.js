import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../../store/actions/ticket";
import TicketForm from "../presentationals/TicketForm";
import {getCurrentEvent} from "../../store/actions/events"

class CreateTicketFormContainer extends React.Component {
  state = {
    price: "",
    description: "",
    pictureUrl: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props
      .createTicket(this.state)
      .then(() => this.props.getCurrentEvent(this.props.event.id));
    
  };
  render() {
    return (
      <div>
        <p>Create a ticket for this event</p>
        <TicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          showEditMode={false}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { event: state.events.current};
}

export default connect(mapStateToProps, { createTicket, getCurrentEvent })(CreateTicketFormContainer);
