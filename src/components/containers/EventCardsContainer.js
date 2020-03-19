import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../store/actions/events";
import EventCardsList from "../presentationals/EventCardsList";
import CreateEventFormContainer from "./CreateEventFormContainer";
import Pagination from "../presentationals/Pagination";
import "./styling/EventCardsContainer.css";

class EventCardsContainer extends Component {
  componentDidMount() {
    this.props.getEvents(1, 0);
  }

  getPage = (page, offset) => {
    this.props.getEvents(page, offset);
  };

  render() {
    const checkUserLogged = () => {
      if (this.props.user.loginInfo.jwt) {
        return <CreateEventFormContainer />;
      }
      return <p>Login to create events</p>;
    };

    if (!this.props.events) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <EventCardsList events={this.props.events} />
        {checkUserLogged()}
        <Pagination pagination={this.props.pagination} getPage={this.getPage} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    events: state.events.all.rows,
    user: state.user,
    pagination: state.events.all.pages
  };
}
const mapDispatchToProps = { getEvents };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCardsContainer);
