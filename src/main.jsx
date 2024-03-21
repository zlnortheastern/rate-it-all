import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ThreadPage from "./pages/ThreadPage";
import CreatePage from "./pages/CreatePage";
import RatingPage from "./pages/RatingPage";
import RatingViewPage from "./pages/RatingViewPage";
import ErrorPage from "./pages/ErrorPage";
import React, { Component } from "react";
import { myFirebase } from "./models/MyFirebase";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      currentThread: {},
      currentObject: {},
      currentThreadID: "",
      currentObjectIndex: 0,
    };
  }

  refreshInteractions = async () => {
    this.setState({ threads: await myFirebase.getThreads() });
  };

  async componentDidMount() {
    await this.refreshInteractions();
  }
  selectThread = ({ id, thread }) => {
    this.setState({ currentThread: { id, thread } });
  };

  selectView = ({ threadID, object }) => {
    this.setState({ currentObject: object });
    this.setState({ currentThreadID: threadID });
  };

  selectRate = ({ threadID, object, objectIndex }) => {
    this.setState({ currentThreadID: threadID });
    this.setState({ currentObject: object });
    this.setState({ currentObjectIndex: objectIndex });
  };

  render() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage threads={this.state.threads} onClickThread={this.selectThread} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "thread/:threadID",
        element: <ThreadPage thread={this.state.currentThread} onClickView={this.selectView} onClickRate={this.selectRate} />,
      },
      {
        path: "thread/:threadID/rating/:objectID",
        element: <RatingPage currentThreadID={this.state.currentThreadID} object={this.state.currentObject} objectIndex={this.state.currentObjectIndex} />,
      },
      {
        path: "thread/:threadID/ratingview/:objectID",
        element: <RatingViewPage currentThreadID={this.state.currentThreadID} object={this.state.currentObject} />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
    ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);