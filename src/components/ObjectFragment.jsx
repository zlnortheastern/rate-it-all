import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class ObjectFragment extends Component {

  handleClickView = () => {
    this.props.onClickView({threadID:this.props.threadID, object: this.props.object});
  };

  handleClickRate = () => {
    // Call the onClickThread function passed from HomePage with the thread
    //this.props.onClickObject();
  };

  render() {
    return (
      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-3 text-center">
            <img
              src={this.props.object.objectImage}
              className="img-fluid img-thumbnail"
              style={{ height: 150, width: 130 }}
            />
          </div>
          <div className="col-md-3 border-end text-center">
            <div className="card-body">
              <h5 className="card-title fw-bold">{this.props.object.objectName}</h5>
              <h5><FaStar color="#FFC107" size={16} />  {this.props.object.averageRating}</h5>
            </div>
          </div>
          <div className="col-md-4 border-end p-1">
            <p className="card-text">
              {this.props.object.introduction}
            </p>
          </div>
          <div className="col-md-2">
            <div className="row p-2 m-3">
              <Link to={`ratingview/${this.props.id}`} onClick={this.handleClickView}>
                <button className="btn btn-info m-2">View</button>
              </Link>
              <Link to={`rating/${this.props.id}`} onClick={this.handleClickRate}>
                <button className="btn btn-warning m-2">Rate</button>
              </Link>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
ObjectFragment.propTypes = {
  onClickRate: PropTypes.func,
  onClickView: PropTypes.func,
  id: PropTypes.number,
  threadID: PropTypes.string,
  object: PropTypes.shape({
    objectName: PropTypes.string,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  })
};