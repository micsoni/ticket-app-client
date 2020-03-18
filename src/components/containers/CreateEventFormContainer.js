import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/events";
import EventForm from "../presentationals/EventForm";

class CreateEventFormContainer extends React.Component {
  state = {
    name: "",
    description: "",
    pictureUrl: "",
    startDate: "",
    endDate: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props
      .createEvent(this.state)    
  };
  render() {
    return (
      <div>
        <p>Create a new event</p>
        <EventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { createEvent })(CreateEventFormContainer);
