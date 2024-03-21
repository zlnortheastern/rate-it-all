import React, { Component } from "react";
import HighRatingObject from "./HighRatingObject";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ThreadFragment({thread, id}) {

  const handleClick = () => {
    // Call the onClickThread function passed from HomePage with the thread
    //this.props.onClickThread({ id: id, thread: thread });
  };

  return (
    <div className="card m-2">
      <div className="row g-0">
        <div className="col-md-2 text-center">
          <Link to={`thread/${id}`}>
            <img
              src={thread.threadImage}
              className="img-fluid img-thumbnail"
              style={{ height: 200, width: 180 }}
            />
          </Link>
        </div>
        <div className="col-md-4 border-end">
          <div className="card-body">
            <h5 className="card-title fw-bold">{thread.threadTitle}</h5>
            <p className="card-text">
              {thread.threadDescription}
            </p>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="row align-items-center">
            {thread.objects.slice(0, 3).map((object, index) => (
              <HighRatingObject object={object} key={index} />
            ))}
          </div>
        </div>
        <div className="container">
          <span id="rateMe1" />
        </div>
      </div>
    </div >
  );
}

ThreadFragment.propTypes = {
  //onClickThread: PropTypes.func,
  id: PropTypes.string.isRequired,
  thread: PropTypes.shape({
    threadTag: PropTypes.string.isRequired,
    threadImage: PropTypes.string.isRequired,
    threadTitle: PropTypes.string.isRequired,
    threadDescription: PropTypes.string.isRequired,
    objects: PropTypes.array,
  }),
};