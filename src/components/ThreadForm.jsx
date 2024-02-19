import React, { Component } from "react";
import ObjectForm from "./ObjectForm";
import PropTypes from "prop-types";

export default class ThreadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [{objectName:"", objectImage:"", introduction:"", ratings:[],}],
    };
  }

  onCreate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Extracting thread data from form
    const threadData = {
      threadTitle: formData.get("threadTitle"),
      threadTag: formData.get("threadTag"),
      threadImage: formData.get("threadImage"),
      threadDescription: formData.get("threadDescription"),
      objects: this.state.objects, // Passing objects from state
    };

    // Resetting form fields
    event.target.reset();

    // Call the provided onCreateThread function with the thread data
    this.props.onCreateThread(threadData);
  };


  updateObject = (index, newData) => {
    newData.ratings=[];
    newData.averageRating=0.0;
    this.setState((prevState) => ({
      objects: prevState.objects.map((obj, i) =>
        i === index ? { ...obj, ...newData } : obj
      ),
    }));
  };

  addNewObject = () => {
    // Adding a new empty object to the state
    this.setState((prevState) => ({
      objects: [...prevState.objects, {}],
    }));
  };

  render() {
    return (
      <form action="/" onSubmit={this.onCreate}>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="threadTag" className="form-label">
              Choose a tag
            </label>
            <select name="threadTag" className="form-select" defaultValue="Other">
              <option value="Other">Other</option>
              <option value="News">News</option>
              <option value="Film">Film</option>
              <option value="TV Show">TV Show</option>
              <option value="Music">Music</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
              <option value="Game">Game</option>
              <option value="Sport">Sport</option>
              <option value="E-sport">E-sport</option>
              <option value="Life">Life</option>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="threadDescription" className="form-label">Thread description</label>
            <textarea className="form-control" name="threadDescription" rows="3" />
          </div>
        </div>
        <hr className="hr" />
        <legend>Add objects</legend>

        {this.state.objects.map((object, index) => (
          <ObjectForm
            key={index}
            index={index}
            updateObject={this.updateObject}
          />
        ))}

        <div className="mb-3">
          <button type="button" className="btn btn-secondary" onClick={this.addNewObject} >New Object</button>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    );
  }
}

ThreadForm.propTypes = {
  onCreateThread: PropTypes.func.isRequired,
};