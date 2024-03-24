import { useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import { Link, useParams } from "react-router-dom";
import RatingFragment from "../components/RatingFragment";
import ObjectInfoBoard from "../components/ObjectInfoBoard";
import { myFirebase } from "../models/MyFirebase";
import Pagination from "../fragments/Pagination";

export default function RatingViewPage() {
  const { threadId, objectId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [ratingsPerPage] = useState(10);
  const [object, setObject] = useState({
    objectId: 0,
    objectName: "",
    objectImage: "",
    introduction: "",
    averageRating: 0,
    ratings: [],
  });

  useEffect(() => {
    const getObject = async () => {
      const object = await myFirebase.getObject(threadId, objectId);
      setObject(object);
    };
    getObject();
  }, [threadId, objectId]);

  // Get current threads based on pagination
  const indexOfLastRating = currentPage * ratingsPerPage;
  const indexOfFirstRating = indexOfLastRating - ratingsPerPage;
  const currentRatings = object.ratings.slice(indexOfFirstRating, indexOfLastRating);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <BaseTemplate>
        <div>
          <div className="m-2">
            <Link to={`/thread/${threadId}`}>
              <button className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>

          <div className="row gx-3">
            <div className="col-md-4">
              <div className="p-3">
                <ObjectInfoBoard object={object} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-3">
                {currentRatings.map((rating, index) => (
                  <RatingFragment key={index} rating={rating} />
                ))}
              </div>
              <Pagination
                itemsPerPage={ratingsPerPage}
                totalItems={object.ratings.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}
