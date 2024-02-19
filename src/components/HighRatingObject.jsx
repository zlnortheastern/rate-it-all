import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HighRatingObject extends Component {
  render() {
    return (
      <div className="col text-center">
        <img
          src={this.props.object.objectImage}
          className="img-fluid"
          style={{ height: 150, width: 120 }}
        />
        <p>9.2</p>
      </div>
    );
  }
}

HighRatingObject.propTypes = {
  object: PropTypes.shape({
    objectName: PropTypes.string,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    ratings: PropTypes.object,
  })
};