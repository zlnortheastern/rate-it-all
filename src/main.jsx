import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ThreadPage from "./pages/ThreadPage";
import CreatePage from "./pages/CreatePage";
import RatingPage from "./pages/RatingPage";
import RatingViewPage from "./pages/RatingViewPage";
import ErrorPage from "./pages/ErrorPage";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "thread/:threadId",
    element: <ThreadPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "thread/:threadId/rating/:objectId",
    element: <RatingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "thread/:threadId/ratingview/:objectId",
    element: <RatingViewPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);