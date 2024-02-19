import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ThreadPage from "./pages/ThreadPage";
import CreatePage from "./pages/CreatePage";
import RatingPage from "./pages/RatingPage";
import RatingViewPage from "./pages/RatingViewPage";
import ErrorPage from "./pages/ErrorPage";
import React, { Component } from "react";
import ThreadManager from "./models/ThreadManager";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.threadManager = new ThreadManager();
    this.state = {
      threads:[],
      currentThread:{},
    };
  }

  refreshInteractions = async () => {
    this.setState({ threads: await this.threadManager.getThreadFromDB()});
  };

  async componentDidMount() {
    console.log("IndexPage.componentDidMount()", "Fetching interactions...");
    await this.refreshInteractions();
  }

  selectThread = ({id,thread}) => {
    this.setState({currentThread:{id, thread}});
  };

  render() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage threads={this.state.threads} onClickThread={this.selectThread}/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "thread/:threadID",
        element: <ThreadPage thread={this.state.currentThread}/>,
        children: [
          {
            path: "rating/:objectID",
            element: <RatingPage />,
          },
          {
            path: "ratingview/:objectID",
            element: <RatingViewPage />,
          },
        ]
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