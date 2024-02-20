import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

export default class RatingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating:0.0,
    };
  }
  setRating(starValue){
    this.setState({
      rating:starValue
    });
  }
  onCreate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ratingData = {
      rating: this.state.rating*2,
      comment: formData.get("comment"),
    };

    event.target.reset();

    this.props.onCreateRating(ratingData);
  };
  render() {
    return (
      <div className="m-2">
        <form action="/" onSubmit={this.onCreate}>
          <legend>Rate it</legend>
          <div className="mb-3">
            {[...Array(5)].map((star, i) => {
              const starValue = i + 1;
              return (
                <label key={i}>
                  <FaStar color={starValue <= this.state.rating ? "#FFC107" : "E4E5E9"} size={30} />
                  <input type="radio"
                    className="invisible"
                    name="rating"
                    value={starValue}
                    onClick={() => this.setRating(starValue)} />
                </label>
              );
            })}
          </div>
          <div className="mb-3">
            <label htmlFor="threadDescription" className="form-label">Comment</label>
            <textarea className="form-control" name="comment" rows="3" />
          </div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
RatingForm.propTypes={
  onCreateRating: PropTypes.func,
};