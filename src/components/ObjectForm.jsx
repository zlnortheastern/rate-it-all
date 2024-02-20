import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ObjectForm extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateObject(this.props.index, { [name]: value });
  };

  render() {

    return (
      <div >
        <div className="mb-3">
          <label className="form-label">Object name</label>
          <input
            type="text"
            name="objectName"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Object image (URL)</label>
          <input
            type="url"
            name="objectImage"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Object introduction</label>
          <textarea
            className="form-control"
            name="introduction"
            rows="3"
            onChange={this.handleChange}
          />
        </div>
        <hr className="hr" />
      </div>
    );
  }
}

ObjectForm.propTypes = {
  index: PropTypes.number,
  updateObject: PropTypes.func.isRequired,
};
