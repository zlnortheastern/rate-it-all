import React, { useState } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import ThreadForm from "../components/ThreadForm";
import { myFirebase } from "../models/MyFirebase";
import { Link } from "react-router-dom";

export default function CreatePage() {

  const onCreateThread = (threadData) => {
    const { threadTitle, threadTag, threadImage, threadDescription, objects } = threadData;
    //this.threadManager.addThread(threadTag, threadTitle, threadImage, threadDescription, objects);
    myFirebase.addThread({ threadTitle, threadTag, threadImage, threadDescription, objects });
    this.setState({
      isCreated: true,
    });
  };

  return (
    <div>
      <BaseTemplate>
        <ThreadForm onCreateThread={onCreateThread} />
      </BaseTemplate>
    </div>
  );


}