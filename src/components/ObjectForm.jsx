import PropTypes from "prop-types";

export default function ObjectForm({index, updateObject}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateObject(index, { [name]: value });
  };


  return (
    <div className={`objectform${index}`}>
      <div className="mb-3">
        <label className="form-label">Object name</label>
        <input
          type="text"
          name="objectName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Object image (URL)</label>
        <input
          type="url"
          name="objectImage"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Object introduction</label>
        <textarea
          className="form-control"
          name="introduction"
          rows="3"
          onChange={handleChange}
        />
      </div>
      <hr className="hr" />
    </div>
  );
}

ObjectForm.propTypes = {
  index: PropTypes.number,
  updateObject: PropTypes.func.isRequired,
};
