import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import React from "react";
import ThreadPage from "./pages/ThreadPage";
import CreatePage from "./pages/CreatePage";
import RatingPage from "./pages/RatingPage";
import RatingViewPage from "./pages/RatingViewPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/thread",
    element: <ThreadPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/rating",
    element: <RatingPage />,
  },
  {
    path: "/ratingview",
    element: <RatingViewPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);