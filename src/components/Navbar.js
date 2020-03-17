import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styling/Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home 
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/profile" className="nav-link">
                My profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/events" className="nav-link">
                All events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
