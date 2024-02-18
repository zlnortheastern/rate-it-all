import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" aria-disabled="true" to="/">
            RATE IT ALL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/rating">
                  Rating
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/thread">
                  Thread
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ratingview">
                  RatingView
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                data-mdb-ripple-init=""
                type="button"
                className="btn btn-link px-3 me-2"
              >
                Login
              </button>
              <button type="button" className="btn btn-dark">
                <Link className="nav-link active" to="/create">
                  Create
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>


    );
  }
}
