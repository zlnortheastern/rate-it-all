import React, { Component } from "react";
import ThreadFragment from "./ThreadFragment";
import PropTypes from "prop-types";

export default class ThreadList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.threads.map((thread, index) => (
          <ThreadFragment thread={thread} key={index}/>
        ))}
      </div>
    );
  }
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      threadTag: PropTypes.string.isRequired,
      threadImage: PropTypes.string.isRequired,
      threadTitle: PropTypes.string.isRequired,
      threadDescription: PropTypes.string.isRequired,
      objects: PropTypes.array,
    })
  ),
};