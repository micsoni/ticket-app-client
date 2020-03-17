import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentEvent } from "../store/actions/events";
import TicketList from "./TicketList";
import EventDetails from "./EventDetails";
import "./styling/EventDetailsContainer.css";

class EventDetailsContainer extends Component {
  componentDidMount() {
    this.props.getCurrentEvent(this.props.match.params.id);
  }
  render() {
    const checkforTickets = () => {
      if (this.props.tickets.length === 0) {
        return <p>No tickets for this event yet</p>;
      }
      return <TicketList tickets={this.props.tickets} />;
    };

    if (!this.props.tickets) {
      return <p>Loading...</p>;
    }
    return (
      <div className="single-event">
        <EventDetails event={this.props.event} />
        <div>{checkforTickets()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { event: state.events.current, tickets: state.events.current.tickets };
}
const mapDispatchToProps = { getCurrentEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer);
