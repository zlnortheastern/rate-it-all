import { useRef, useState } from "react";
import ObjectForm from "./ObjectForm";
import PropTypes from "prop-types";

export default function ThreadForm({ onCreateThread }) {
  const [objects, setObjects] = useState([{
    objectName: "", objectImage: "", introduction: "", ratings: [],
  }]);
  const titleRef = useRef();
  const tagRef = useRef();
  const imageRef = useRef();
  const desRef = useRef();

  const onCreate = (event) => {
    event.preventDefault();

    onCreateThread({
      threadTitle: titleRef.current.value,
      threadTag: tagRef.current.value,
      threadImage: imageRef.current.value || "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
      threadDescription: desRef.current.value,
      objects: objects,
    });

  };

  const updateObject = (index, newData) => {
    newData.objectId = index;
    newData.ratings = [];
    newData.averageRating = 0.0;
    setObjects(prevObjects =>
      prevObjects.map((obj, i) =>
        i === index ? { ...obj, ...newData } : obj
      )
    );
  };

  const addNewObject = () => {
    // Adding a new empty object to the state
    setObjects(prevObjects => [...prevObjects, {}]);
  };

  const tagList = [
    "Other",
    "News",
    "Film",
    "TV Show",
    "Music",
    "Science",
    "Technology",
    "Game",
    "Sport",
    "E-sport",
    "Life"
  ];
  return (
    <form action="/" onSubmit={onCreate}>
      <div className="thread">
        <legend>Create a thread</legend>
        <div className="mb-3">
          <label htmlFor="threadTitle" className="form-label">
            Thread title
          </label>
          <input
            type="text"
            name="threadTitle"
            className="form-control"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="threadTag" className="form-label">
            Choose a tag
          </label>
          <select name="threadTag" className="form-select" defaultValue="Other" ref={tagRef}>
            {tagList.map((tag, i) => 
              <option value={tag} key={i}>{tag}</option>
            )}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="threadImage" className="form-label">
            Thread image (URL)
          </label>
          <input
            type="url"
            name="threadImage"
            className="form-control"
            ref={imageRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="threadDescription" className="form-label">Thread description</label>
          <textarea className="form-control" name="threadDescription" rows="3" ref={desRef} />
        </div>
      </div>
      <hr className="hr" />
      <legend>Add objects</legend>

      {objects.map((object, index) => (
        <ObjectForm
          key={index}
          index={index}
          updateObject={updateObject}
        />
      ))}

      <div className="mb-3">
        <button type="button" className="btn btn-secondary" onClick={addNewObject} >New Object</button>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>

  );
}

ThreadForm.propTypes = {
  onCreateThread: PropTypes.func.isRequired,
};