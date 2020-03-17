import React, { Component } from "react";
import { getCurrentTicket } from "../store/actions/ticket";
import { connect } from "react-redux";
import CommentCardsList from "./CommentCardsList";
import TicketDetails from "./TicketDetails";

class TicketDetailsContainer extends Component {
  componentDidMount() {
    this.props.getCurrentTicket(this.props.match.params.id);
  }
  render() {
    const checkforComments = () => {
      if (this.props.ticket.comments.length === 0) {
        return <p>No comments on this ticket yet</p>;
      }
      return <CommentCardsList comments={this.props.ticket.comments} />;
    };

    if (!this.props.ticket) {
      return <p>Loading...</p>;
    }
    return (
      <div className="single-event">
        <TicketDetails ticket={this.props.ticket} />
        <div>{checkforComments()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ticket: state.ticket };
}
const mapDispatchToProps = { getCurrentTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
