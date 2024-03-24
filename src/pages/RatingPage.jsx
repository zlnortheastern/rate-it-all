import { useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import { Link, useNavigate, useParams } from "react-router-dom";
import ObjectInfoBoard from "../components/ObjectInfoBoard";
import RatingForm from "../components/RatingForm";
import { myFirebase } from "../models/MyFirebase";

export default function RatingPage() {
  const { threadId, objectId } = useParams();
  const navigate = useNavigate();
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

  const onCreateRating = async (ratingData) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if(isLoggedIn){
      ratingData.userName = localStorage.getItem('username');
      await myFirebase.updateRating(threadId, +objectId, ratingData);
      navigate(`/thread/${threadId}`);
    }else{
      alert("Please log in to post rating.");
    }
  };

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
                <RatingForm onCreateRating={onCreateRating} />
              </div>
            </div>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}