import HighRatingObject from "./HighRatingObject";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ThreadFragment({ thread }) {

  // Sort objects and retrieve top 3 objects
  const sortedObjects = [...thread.objects].sort((a, b) => b.averageRating - a.averageRating);
  const top3Objects = sortedObjects.slice(0,3);
  return (
    <div className="card m-2">
      <div className="row g-0">
        <div className="col-md-2 text-center">
          <Link to={`thread/${thread.id}`}>
            <img
              src={thread.threadImage}
              name={thread.threadTitle}
              className="img-fluid img-thumbnail"
              style={{ height: 200, width: 180 }}
            />
          </Link>
        </div>
        <div className="col-md-4 border-end">
          <div className="card-body">
            <h5 className="card-title fw-bold">{thread.threadTitle}</h5>
            <p className="card-text">
              {thread.threadDescription}
            </p>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="row align-items-center">
            {top3Objects.map((object, index) => (
              <HighRatingObject object={object} key={index} />
            ))}
          </div>
        </div>
        <div className="container">
          <span id="rateMe1" />
        </div>
      </div>
    </div >
  );
}

ThreadFragment.propTypes = {
  thread: PropTypes.shape({
    threadTag: PropTypes.string.isRequired,
    threadImage: PropTypes.string.isRequired,
    threadTitle: PropTypes.string.isRequired,
    threadDescription: PropTypes.string.isRequired,
    objects: PropTypes.array,
    id: PropTypes.string.isRequired,
  }),
};