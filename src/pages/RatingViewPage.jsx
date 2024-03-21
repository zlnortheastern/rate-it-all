import React, { Component, useEffect, useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import RatingFragment from "../components/RatingFragment";
import ObjectInfoBoard from "../components/ObjectInfoBoard";
import { myFirebase } from "../models/MyFirebase";

export default function RatingViewPage() {
  const {threadId, objectId} = useParams();
  const [object, setObject] = useState({
    objectId: 0,
    objectName: "",
    objectImage: "",
    introduction: "",
    averageRating: 0,
    ratings: [],
  });

  useEffect(() => {
    const getObject = async() => {
      const object = await myFirebase.getObject(threadId, objectId);
      console.log(JSON.stringify(object));
      setObject(object);
    };
    getObject();
  }, []);

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
                {object.ratings.map((rating, index) => (
                  <RatingFragment key={index} rating={rating} />
                ))}

              </div>
            </div>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}
