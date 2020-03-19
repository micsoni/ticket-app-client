import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventCardsList extends Component {
  render() {
    const displayEvents = this.props.events.map(event => {
      return (
        <div className="col-lg-3 col-md-4 col-6" key={event.id}>
          <div className="card event-list">
            <img src={event.pictureUrl} className="card-img-top" alt=" " />
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <p className="card-text">Begins on: {event.startDate}</p>
              <Link to={`/events/${event.id}`} className="btn btn-info">
                See Details
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{displayEvents}</div>;
  }
}
