import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default class ObjectInfoBoard extends Component {
  render() {
    return (
      <div className="border border-dark d-flex justify-content-center align-items-center" >
        <div className="p-3 text-center">
          <img src={this.props.object.objectImage}
            className="img-fluid img-thumbnail"
            style={{ height: 200, width: 180 }} />
          <h4 className="fw-bold">{this.props.object.objectName}</h4>
          <h5><FaStar color="#FFC107" size={16} />  {this.props.object.averageRating}</h5>
          <hr className="hr" />
          <p>{this.props.object.introduction}</p>
        </div>
      </div>
    );
  }
}
ObjectInfoBoard.propTypes = {
  object: PropTypes.shape({
    objectName: PropTypes.string.isRequired,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  }),
};