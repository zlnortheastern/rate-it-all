import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RatingFragment extends Component {
  render() {
    return (
      <div className="card m-2">
        <div className="card-header">
          Username
        </div>
        <div className="card-body">
          <h5 className="card-title">Star part</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    );
  }
}
RatingFragment.propTypes = {
  rating: PropTypes.shape({
    rating: PropTypes.number,
    comment: PropTypes.string,
  }),
};