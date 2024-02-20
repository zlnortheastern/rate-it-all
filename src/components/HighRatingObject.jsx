import React, { Component } from "react";
import PropTypes from "prop-types";
import {FaStar} from "react-icons/fa";

export default class HighRatingObject extends Component {
  render() {
    return (
      <div className="col text-center">
        <img
          src={this.props.object.objectImage}
          className="img-fluid"
          style={{ height: 150, width: 130 }}
        />
        <p><FaStar color="#FFC107" size={15}/>  {this.props.object.averageRating}</p>
      </div>
    );
  }
}

HighRatingObject.propTypes = {
  object: PropTypes.shape({
    objectId: PropTypes.number,
    objectName: PropTypes.string.isRequired,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  })
};