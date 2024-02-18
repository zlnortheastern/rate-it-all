import React, { Component } from "react";
import HighRatingObject from "./HighRatingObject";

export default class ThreadFragment extends Component {
  render() {
    return (
      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-2 text-center">
            <img
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid img-thumbnail"
              style={{ maxHeight: 200, maxWidth: 180 }}
            />
          </div>
          <div className="col-md-5 border-end">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
          <div className="col p-1">
            <div className="row align-items-center">
              <HighRatingObject />
              <HighRatingObject />
              <HighRatingObject />
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
