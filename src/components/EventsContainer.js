import React, { Component } from "react";
import EventCard from "./EventCard";
import { connect } from "react-redux";
import { getEvents } from "../store/actions/events";
import "./styling/EventsContainer.css"

class EventsContainer extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    if (!this.props.events.length) {
      return <p>Loading...</p>;
    }
    const displayEvents = this.props.events.map(event => {
      return <EventCard key={event.id} event={event} />;
    });
    return <div className="row">{displayEvents}</div>;
  }
}
function mapStateToProps(state) {
  return { events: state.events.all };
}
const mapDispatchToProps = { getEvents };
export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
