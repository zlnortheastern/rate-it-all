import React, { Component } from "react";

export default class HighRatingObject extends Component {
  render() {
    return (
      <div className="col text-center">
        <img
          src="https://thispersondoesnotexist.com/"
          className="img-thumbnail"
          style={{ maxHeight: 150, maxWidth: 120 }}
        />
        <p>9.2</p>
      </div>
    );
  }
}
