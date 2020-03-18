import React, { Component } from "react";
import EventCardsList from "../presentationals/EventCardsList";
import { connect } from "react-redux";
import { getEvents } from "../../store/actions/events";
import "./styling/EventCardsContainer.css";
import CreateEventFormContainer from "./CreateEventFormContainer"
class EventCardsContainer extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {


    const checkUserLogged = () => {
      if (this.props.user.loginInfo.jwt) {
        return <CreateEventFormContainer/>;
      }
      return <p>Login to create events</p>;
    }

    if (!this.props.events) {
      return <p>Loading...</p>;
    }
    return <div><EventCardsList events={this.props.events} />{checkUserLogged()}</div>;
  }
}
function mapStateToProps(state) {
  return { events: state.events.all.rows, user: state.user };
}
const mapDispatchToProps = { getEvents };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCardsContainer);
