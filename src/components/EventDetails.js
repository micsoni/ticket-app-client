import React, { Component } from 'react'
import {connect} from "react-redux"
import {getCurrentEvent} from "../store/actions/events"

class EventDetails extends Component {
  
  componentDidMount() {
    this.props.getCurrentEvent(this.props.match.params.id);
  }
  render() {
    if (!this.props.event) {
      return <p>Loading...</p>;
    }
    return <div className="row">hello</div>;
  }
}

function mapStateToProps(state) {
  return { event: state.events.current };
}
const mapDispatchToProps = { getCurrentEvent };
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);