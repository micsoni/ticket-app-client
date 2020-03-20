import React, { Component } from "react";
import { connect } from "react-redux";
import { getTickets } from "../../store/actions/tickets";
import TicketCardsList from "../presentationals/TicketCardsList";
import Pagination from "../presentationals/Pagination";
import "./styling/TicketCardsContainer.css";

class TicketCarsContainer extends Component {
  state = {
    currentPage: 1,
    offset: 0,
    loading: true
  };

  componentDidMount() {
    this.props
      .getTickets(this.state.currentPage, this.state.offset)
      .then(this.setState({ ...this.state, loading: false }));
  }

  getPage = (page, offset) => {
    this.setState({ ...this.state, currentPage: page });
    this.props.getTickets(page, offset);
  };

  nextOrPrevPage = type => {
    const newPage =
      type === "next" ? this.state.currentPage + 1 : this.state.currentPage - 1;
    const offset = type === "next" ? (newPage - 1) * 9 : (newPage - 1) * 9;

    this.setState({ ...this.state, currentPage: newPage, offset: offset });
    this.props.getTickets(newPage, offset);
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    if (this.props.tickets == null || this.props.tickets.length === 0) {
      return <p>no tickets yet</p>;
    }
    return (
      <div className="space">
        <Pagination
          pagination={this.props.pagination}
          currentPage={this.state.currentPage}
          getPage={this.getPage}
          nextOrPrevPage={this.nextOrPrevPage}
          pageCount={this.props.pageCount}
        />
        <TicketCardsList tickets={this.props.tickets} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tickets: state.tickets.all.rows,
    pagination: state.tickets.all.pages,
    pageCount: state.tickets.all.pageCount
  };
}
const mapDispatchToProps = { getTickets };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketCarsContainer);
