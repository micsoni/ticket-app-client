import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentTicket } from "../../store/actions/tickets";
import CommentCardsList from "../presentationals/CommentCardsList";
import TicketDetails from "../presentationals/TicketDetails";
import CreateCommentFormContainer from "./CreateCommentFormContainer";
import "./styling/TicketDetailsContainer.css";

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
    const checkUserLogged = () => {
      if (this.props.user.loginInfo.jwt) {
        return <CreateCommentFormContainer />;
      }
      return <p>Login to comment</p>;
    };

    if (!this.props.ticket) {
      return <p>Loading...</p>;
    }

    return (
      <div className="single-event">
        <TicketDetails ticket={this.props.ticket} />
        <div>{checkforComments()}</div>
        <div>{checkUserLogged()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ticket: state.tickets.current, user: state.user };
}
const mapDispatchToProps = { getCurrentTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
