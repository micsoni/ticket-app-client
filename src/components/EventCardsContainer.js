import React, { Component } from "react";
import EventCardsList from "./EventCardsList";
import { connect } from "react-redux";
import { getEvents } from "../store/actions/events";
import "./styling/EventCardsContainer.css";

class EventCardsContainer extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    if (!this.props.events.length) {
      return <p>Loading...</p>;
    }
    return <EventCardsList events={this.props.events} />;
  }
}
function mapStateToProps(state) {
  return { events: state.events.all };
}
const mapDispatchToProps = { getEvents };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCardsContainer);
