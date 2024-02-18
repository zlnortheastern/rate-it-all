import React, { Component } from "react";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h5 className="text-center">Category List</h5>
        <ul className="list-group list-group-light">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            All
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            News
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Film
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            TV
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Music
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Science
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Technology
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Game
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Sport
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            E-sport
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Life
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              defaultValue=""
              aria-label="..."
            />
            Other
          </li>
        </ul>
      </div>
    );
  }
}
