import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import ThreadForm from "../components/ThreadForm";
import ThreadManager from "../models/ThreadManager";
import { Navigate  } from "react-router-dom";

export default class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.threadManager = new ThreadManager();
    this.state = {
      redirectToHome: false,
    };
  }

  onCreateThread = (threadData) => {
    const { threadTitle, threadTag, threadImage, threadDescription, objects } = threadData;
    this.threadManager.addThread(threadTag, threadTitle, threadImage, threadDescription, objects);
    console.log("Thread Data:",JSON.stringify(objects));
    this.setState({ redirectToHome: true });
  };
  render() {
    const { redirectToHome } = this.state;
    if (redirectToHome) {
      return <Navigate  to="/" />;
    }
    return (
      <div>
        <BaseTemplate>
          <ThreadForm  onCreateThread={this.onCreateThread}/>
        </BaseTemplate>
      </div>
    );

  }
}