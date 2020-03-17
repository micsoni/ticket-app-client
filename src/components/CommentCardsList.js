import React, { Component } from "react";

export default class CommentCardsList extends Component {
  render() {
    const displayComments = this.props.comments.map((comment, index) => {
      const color =
        index % 2 === 0 ? "card text-white bg-info mb-3" : "card bg-light mb-3";
      return (
        <div className={color} key={comment.id}>
          <div className="card-body">
            <h5 className="card-title">{comment.user.username} said:</h5>
            <p className="card-text">{comment.text}</p>
          </div>
        </div>
      );
    });
    return <div>{displayComments}</div>;
  }
}
