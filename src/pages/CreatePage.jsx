import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import ThreadForm from "../components/ThreadForm";
import { myFirebase } from "../models/MyFirebase";
import { Link } from "react-router-dom";

export default class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
    };
  }

  onCreateThread = (threadData) => {
    const { threadTitle, threadTag, threadImage, threadDescription, objects } = threadData;
    //this.threadManager.addThread(threadTag, threadTitle, threadImage, threadDescription, objects);
    myFirebase.addThread({ threadTitle, threadTag, threadImage, threadDescription, objects });
    this.setState({
      isCreated: true,
    });
  };
  render() {

    if (this.state.isCreated) {
      return(
        <div>
          <BaseTemplate>
            <div className="mb-3">
              <h3>You have created a thread!</h3>
            </div>
            <div className="mb-3">
              <Link to="/">
                <button className="btn btn-primary">
                  Back
                </button>
              </Link>
            </div>
          </BaseTemplate>
        </div>
      );
    } else {
      return (
        <div>
          <BaseTemplate>
            <ThreadForm onCreateThread={this.onCreateThread} />
          </BaseTemplate>
        </div>
      );
    }

  }
}