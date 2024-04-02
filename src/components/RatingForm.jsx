import { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

export default function RatingForm ({onCreateRating}) {
  const [rating, setRating] = useState(0.0);
  const commentRef = useRef();
  const onCreate = (event) => {
    event.preventDefault();

    const ratingData = {
      rating: rating * 2,
      comment: commentRef.current.value,
    };

    onCreateRating(ratingData);
  };

  return (
    <div className="m-2">
      <form action="/" onSubmit={onCreate}>
        <legend>Rate it</legend>
        <div className="mb-3">
          {[...Array(5)].map((star, i) => {
            const starValue = i + 1;
            return (
              <label key={i}>
                <FaStar name={`star${i}`} color={starValue <= rating ? "#FFC107" : "E4E5E9"} size={30} />
                <input type="radio"
                  className="invisible"
                  name="rating"
                  value={starValue}
                  onClick={() => setRating(starValue)} />
              </label>
            );
          })}
        </div>
        <div className="mb-3">
          <label htmlFor="ratingComment" className="form-label">Comment</label>
          <textarea className="form-control" name="comment" rows="3" ref={commentRef}/>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
RatingForm.propTypes = {
  onCreateRating: PropTypes.func,
};