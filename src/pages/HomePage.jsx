import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import CategoryList from "../components/CategoryList";
import PropTypes from "prop-types";
import ThreadFragment from "../components/ThreadFragment";


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <BaseTemplate>
          <div className="row gx-3">
            <div className="col-2">
              <div className="p-3">
                <CategoryList />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                {this.props.threads.map((thread, index) => (
                  <ThreadFragment thread={thread.thread} key={index} id={thread.id} onClickThread={this.props.onClickThread} />
                ))}
              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}

HomePage.propTypes = {
  onClickThread: PropTypes.func,
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thread: PropTypes.object.isRequired,
    })
  )
};