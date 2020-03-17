import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class EventCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
   <div className="card event-list">
    <img src={this.props.event.pictureUrl} className="card-img-top" alt=" "/>
    <div className="card-body">
      <h5 className="card-title">{this.props.event.name}</h5>
      <p className="card-text">Date: {this.props.event.startDate}</p>
      <Link to={`/events/${this.props.event.id}`} className="btn btn-info"> See Details </Link>
    </div>
  </div>
      </div>
    );
  }
}

