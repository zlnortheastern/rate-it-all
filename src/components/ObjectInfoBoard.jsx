import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default function ObjectInfoBoard ({object}) {
    return (
      <div className="border border-dark d-flex justify-content-center align-items-center" >
        <div className="p-3 text-center text-wrap text-break">
          <img src={object.objectImage}
            className="img-fluid img-thumbnail"
            style={{ height: 200, width: 180 }} />
          <h4 className="fw-bold">{object.objectName}</h4>
          <h5><FaStar color="#FFC107" size={16} />  {object.averageRating.toFixed(1)}</h5>
          <hr className="hr" />
          <p>{object.introduction}</p>
        </div>
      </div>
    );
}
ObjectInfoBoard.propTypes = {
  object: PropTypes.shape({
    objectId: PropTypes.number,
    objectName: PropTypes.string.isRequired,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  }),
};