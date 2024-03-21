import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ObjectInfoBoard from "../components/ObjectInfoBoard";
import RatingForm from "../components/RatingForm";
import { myFirebase } from "../models/MyFirebase";

export default class RatingPage extends Component {
  constructor(props){
    super(props);
  }
  onCreateRating = (ratingData)  => {
    myFirebase.updateRating(this.props.currentThreadID, this.props.object.objectId, ratingData);
  };
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
                  <RatingForm onCreateRating={this.onCreateRating}/>
                </div>
              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}

RatingPage.propTypes = {
  currentThreadID: PropTypes.string,
  objectIndex: PropTypes.number,
  object:PropTypes.shape({
    objectId: PropTypes.number,
    objectName: PropTypes.string,
    objectImage: PropTypes.string,
    introduction: PropTypes.string,
    averageRating: PropTypes.number,
    ratings: PropTypes.array,
  }),
};