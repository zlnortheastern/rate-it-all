import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import PropTypes from "prop-types";
import ThreadInfoBoard from "../components/ThreadInfoBoard";
import ObjectFragment from "../components/ObjectFragment";

export default class ThreadPage extends Component {
  render() {
    return (
      <div>
        <BaseTemplate>
          <div className="row gx-3">
            <div className="col-md-4">
              <div className="p-3">
                <ThreadInfoBoard thread={this.props.thread} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-3">
                {this.props.thread.thread.objects.map((object, index) => (
                  <ObjectFragment
                    object={object}
                    key={index}
                    id={index}
                    threadID={this.props.thread.id}
                    onClickView={this.props.onClickView} 
                    onClickRate={this.props.onClickRate}/>
                ))}

              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}

ThreadPage.propTypes = {
  onClickRate: PropTypes.func,
  onClickView: PropTypes.func,
  thread: PropTypes.shape({
    id: PropTypes.string,
    thread: PropTypes.shape({
      threadTag: PropTypes.string.isRequired,
      threadImage: PropTypes.string.isRequired,
      threadTitle: PropTypes.string.isRequired,
      threadDescription: PropTypes.string.isRequired,
      objects: PropTypes.array,
    }),
  }),
};