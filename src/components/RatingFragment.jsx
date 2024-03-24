import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default function RatingFragment({rating}) {
  return (
    <div className="card m-2">
      <div className="card-header">
        {rating.userName || "Unknown User"}
      </div>
      <div className="card-body">
        {[...Array(5)].map((star, i) => {
          const starValue = i + 1;
          return (
            <label key={i}>
              <FaStar color={starValue <= rating.rating / 2 ? "#FFC107" : "E4E5E9"} size={20} />
            </label>
          );
        })}
        <p className="card-text">{rating.comment}</p>
      </div>
    </div>
  );
}
RatingFragment.propTypes = {
  rating: PropTypes.shape({
    rating: PropTypes.number,
    comment: PropTypes.string,
    userName: PropTypes.string,
  }),
};