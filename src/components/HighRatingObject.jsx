import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default function HighRatingObject({object}) {
  return (
    <div className="col text-center">
      <img
        src={object.objectImage}
        name={object.objectName}
        className="img-fluid"
        style={{ height: 150, width: 130 }}
      />
      <p><FaStar color="#FFC107" size={15} />  {object.averageRating.toFixed(1)}</p>
    </div>
  );
}

HighRatingObject.propTypes = {
  object: PropTypes.shape({
    objectId: PropTypes.number,
    objectName: PropTypes.string.isRequired,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  })
};