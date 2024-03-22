import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ObjectFragment({objectId, threadId, object}) {


  return (
    <div className="card m-2">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img
            src={object.objectImage}
            className="img-fluid img-thumbnail"
            style={{ height: 150, width: 130 }}
          />
        </div>
        <div className="col-md-3 border-end text-center">
          <div className="card-body">
            <h5 className="card-title fw-bold">{object.objectName}</h5>
            <h5><FaStar color="#FFC107" size={16} />  {object.averageRating}</h5>
          </div>
        </div>
        <div className="col-md-4 border-end p-1">
          <p className="card-text">
            {object.introduction}
          </p>
        </div>
        <div className="col-md-2">
          <div className="row p-2 m-3">
            <Link to={`ratingview/${objectId}`}>
              <button className="btn btn-info m-2">View</button>
            </Link>
            <Link to={`rating/${objectId}`}>
              <button className="btn btn-warning m-2">Rate</button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  ); 
}

ObjectFragment.propTypes = {
  objectId: PropTypes.number.isRequired,
  threadId: PropTypes.string.isRequired,
  object: PropTypes.shape({
    objectId: PropTypes.number.isRequired,
    objectName: PropTypes.string.isRequired,
    objectImage: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratings: PropTypes.array,
  })
};