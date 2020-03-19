import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const displayPagination = this.props.pagination.map(page => {
      const offset = (page.number - 1) * 9;
      return (
        <li className="page-item list-group-item-info" key={page.number}>
          <button
            className="page-link text-reset"
            onClick={() => this.props.getPage(page.number, offset)}
          >
            {page.number}
          </button>
        </li>
      );
    });
    return (
      <nav>
        <ul className="pagination pagination-lg justify-content-center">
          {displayPagination}
        </ul>
      </nav>
    );
  }
}
