import React, { Component } from "react";
import HighRatingObject from "./HighRatingObject";
import PropTypes from "prop-types";

export default class ThreadFragment extends Component {
  render() {
    return (
      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-2 text-center">
            <img
              src={this.props.thread.threadImage}
              className="img-fluid img-thumbnail"
              style={{ maxHeight: 200, maxWidth: 180 }}
            />
          </div>
          <div className="col-md-5 border-end">
            <div className="card-body">
              <h5 className="card-title">{this.props.thread.threadTitle}</h5>
              <p className="card-text">
                {this.props.thread.threadDescription}
              </p>
            </div>
          </div>
          <div className="col p-1">
            <div className="row align-items-center">
              {this.props.thread.objects.slice(0, 3).map((object, index) => (
                <HighRatingObject object={object} key={index} />
              ))}
            </div>
          </div>
          <div className="container">
            <span id="rateMe1" />
          </div>
        </div>
      </div>
    );
  }
}

ThreadFragment.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number,
    threadTag: PropTypes.string.isRequired,
    threadImage: PropTypes.string.isRequired,
    threadTitle: PropTypes.string.isRequired,
    threadDescription: PropTypes.string.isRequired,
    objects: PropTypes.array,
  })
};