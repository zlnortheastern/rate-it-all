import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingFragment from "../components/RatingFragment";
import ObjectInfoBoard from "../components/ObjectInfoBoard";

export default class RatingViewPage extends Component {
  render() {
    return (
      <div>
        <BaseTemplate>
          <div>
            <div className="m-2">
              <Link to={`/thread/${this.props.currentThreadID}`}>
                <button className="btn btn-primary">
                  Back
                </button>
              </Link>
            </div>

            <div className="row gx-3">
              <div className="col-md-4">
                <div className="p-3">
                  <ObjectInfoBoard object={this.props.object} />
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-3">
                  {this.props.object.ratings.map((rating, index) => (
                    <RatingFragment key={index} rating={rating} />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}

RatingViewPage.propTypes = {
  currentThreadID: PropTypes.string,
  object: PropTypes.shape({
    objectName: PropTypes.string,
    objectImage: PropTypes.string,
    introduction: PropTypes.string,
    averageRating: PropTypes.number,
    ratings: PropTypes.array,
  })
};