import React, { Component } from "react";
import { getSampleEvents } from "../../store/actions/events";
import EventCardsList from "../presentationals/EventCardsList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styling/Homepage.css";

class Homepage extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.props.getSampleEvents().then(this.setState({ loading: false }));
  }
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    if (this.props.events == null || this.props.events.length === 0) {
      return <p>no events yet</p>;
    }
    return (
      <div>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <div className="card text-center">
          <div className="card-header">Check some of our events</div>
          <div className="row">
            <EventCardsList events={this.props.events} />
          </div>
          <div className="card-footer">
            <Link to={`/events`} className="btn btn-info btn-block">
              See all
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { events: state.events.sample };
}
const mapDispatchToProps = { getSampleEvents };
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
