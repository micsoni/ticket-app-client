import React from "react";
import { connect } from "react-redux";
import { createComment, getCurrentTicket } from "../../store/actions/tickets";
import CommentForm from "../presentationals/CommentForm";

class CreateCommentFormContainer extends React.Component {
  state = {
    text: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props
      .createComment(this.state)
      .then(() => this.props.getCurrentTicket(this.props.ticket.id));
  };
  render() {
    return (
      <div>
        <p>Create new comment</p>
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ticket: state.tickets.current };
}

export default connect(mapStateToProps, { createComment, getCurrentTicket })(
  CreateCommentFormContainer
);
