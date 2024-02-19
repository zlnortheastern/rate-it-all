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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoqiBEpwAhBYKP2Fo0ArXy-HthH4XY73U",
  authDomain: "rateitall-ee1d1.firebaseapp.com",
  projectId: "rateitall-ee1d1",
  storageBucket: "rateitall-ee1d1.appspot.com",
  messagingSenderId: "191603399210",
  appId: "1:191603399210:web:43e09e8fe5d788d844c153",
  measurementId: "G-3SBTFYHBL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase initialized!", app, analytics);