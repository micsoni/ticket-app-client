import React, { Component } from "react";

export default class Pagination extends Component {
  render() {

    const displayPagination = this.props.pagination.map(page => {
      const offset = (page.number - 1) * 9;
      const bgColor =
        page.number === this.props.currentPage ? "bg-info" : "";

      return (
        <li className="page-item list-group-item-info" key={page.number}>
          <button
            className={`${bgColor} page-link text-reset`}
            onClick={() => this.props.getPage(page.number, offset)}
          >
            {page.number}
          </button>
        </li>
      );
    });

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item list-group-item-info">
            <button
              className="page-link text-reset"
              onClick={() => this.props.nextOrPrevPage("previous")}
              disabled={this.props.currentPage === 1}
            >
              Previous
            </button>
          </li>
          {displayPagination}
          <li className="page-item list-group-item-info">
            <button
              className="page-link text-reset"
              onClick={() => this.props.nextOrPrevPage("next")}
              disabled={this.props.currentPage === this.props.pageCount}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
