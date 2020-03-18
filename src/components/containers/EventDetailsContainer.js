import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentEvent } from "../../store/actions/events";
import TicketList from "../presentationals/TicketList";
import EventDetails from "../presentationals/EventDetails";
import "./styling/EventDetailsContainer.css";
import CreateTicketFormContainer from "./CreateTicketFormContainer"

class EventDetailsContainer extends Component {
  componentDidMount() {
    this.props.getCurrentEvent(this.props.match.params.id);
  }
  render() {
    const checkForTickets = () => {
      if (this.props.tickets.length === 0) {
        return <p>No tickets for this event yet</p>;
      }
      return <TicketList tickets={this.props.tickets} />;
    };

    const checkUserLogged = () => {
      if (this.props.user.loginInfo.jwt) {
        return <CreateTicketFormContainer/>;
      }
      return <p>Login to create tickets</p>;
    }

    if (!this.props.tickets) {
      return <p>Loading...</p>;
    }
    return (
      <div className="single-event">
        <EventDetails event={this.props.event} />
        <div>{checkForTickets()}</div>
        <div>{checkUserLogged()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { event: state.events.current, tickets: state.events.current.tickets, user: state.user };
}
const mapDispatchToProps = { getCurrentEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer);