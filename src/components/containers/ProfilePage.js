import React, { Component } from "react";
import { getUserTickets, logout } from "../../store/actions/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UserTicketCardsList from "../presentationals/UserTicketCardsList";

class ProfilePage extends Component {
  componentDidMount() {
    if (this.props.userLoggedIn.jwt) {
      this.props.getUserTickets(this.props.userLoggedIn.id);
    }
  }

  onLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const checkforTickets = () => {
      if (this.props.tickets.length === 0) {
        return <p>You haven't added any tickets yet</p>;
      }
      return <UserTicketCardsList tickets={this.props.tickets} />;
    };

    if (!this.props.userLoggedIn.jwt) {
      return <Redirect to="/login" />;
    }
    if (!this.props.tickets) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>Welcome {this.props.userLoggedIn.name}</p>
        <button className="btn btn-info" onClick={this.onLogout}>
          {" "}
          Logout
        </button>
        <p>Check all your tickets below</p>
        {checkforTickets()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLoggedIn: state.user.loginInfo,
    tickets: state.user.tickets
  };
}
const mapDispatchToProps = { getUserTickets, logout };

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
