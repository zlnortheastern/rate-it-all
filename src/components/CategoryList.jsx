import React, { Component } from "react";

export default class CategoryList extends Component {
  const categories = ['All', 'News', 'Film', 'TV Show', 'Music', 'Science', 'Technology', 'Game', 'Sport', 'E-Sport', 'Life', 'Other'];
  render() {
    return (
      <div>
        <h5 className="text-center">Category List</h5>
        <ul className="list-group list-group-light">
          {categories.map(item => 
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  aria-label="..."
                />
                {item}
              </li>
          )}
        </ul>
      </div>
    );
  }
}
