import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../store/actions/events";
import EventCardsList from "../presentationals/EventCardsList";
import CreateEventFormContainer from "./CreateEventFormContainer";
import Pagination from "../presentationals/Pagination";
import "./styling/EventCardsContainer.css";

class EventCardsContainer extends Component {
  state = {
    createEventMode: false,
    currentPage: 1,
    offset: 0,
    loading: true
  };

  componentDidMount() {
    this.props
      .getEvents(this.state.currentPage, this.state.offset)
      .then(this.setState({ ...this.state, loading: false }));
  }

  getPage = (page, offset) => {
    this.setState({ ...this.state, currentPage: page });
    this.props.getEvents(page, offset);
  };

  nextOrPrevPage = type => {
    const newPage =
      type === "next" ? this.state.currentPage + 1 : this.state.currentPage - 1;
    const offset = type === "next" ? (newPage - 1) * 9 : (newPage - 1) * 9;

    this.setState({ ...this.state, currentPage: newPage, offset: offset });
    this.props.getEvents(newPage, offset);
  };

  toggleForm = () => {
    this.setState({
      ...this.state,
      createEventMode: !this.state.createEventMode
    });
  };

  render() {
    const checkUserLogged = () => {
      if (this.props.user.loginInfo.jwt) {
        return (
          <div className="create">
            <button className="btn btn-info" onClick={this.toggleForm}>
              Create Event
            </button>
            {this.state.createEventMode && <CreateEventFormContainer />}
          </div>
        );
      }
      return <p>Login to create events</p>;
    };

    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    if (this.props.events == null || this.props.events.length === 0) {
      return (
        <div>
          {checkUserLogged()}
          <p>no events yet</p>
        </div>
      );
    }

    return (
      <div>
        {checkUserLogged()}

        <Pagination
          pagination={this.props.pagination}
          currentPage={this.state.currentPage}
          getPage={this.getPage}
          nextOrPrevPage={this.nextOrPrevPage}
          pageCount={this.props.pageCount}
        />
        <EventCardsList events={this.props.events} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    events: state.events.all.rows,
    user: state.user,
    pagination: state.events.all.pages,
    pageCount: state.events.all.pageCount
  };
}
const mapDispatchToProps = { getEvents };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCardsContainer);
