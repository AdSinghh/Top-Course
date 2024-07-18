// Importing React library for building UI components.
import React from "react";

// Importing ReactDOM library for rendering React components into the DOM.
import ReactDOM from "react-dom/client";

// Importing the CSS file for global styles.
import "./index.css";

// Importing the main App component, which is the root component of the application.
import App from "./App";

// Importing ToastContainer component from react-toastify for displaying toast notifications.
import { ToastContainer } from "react-toastify";

// Importing the CSS file specifically for react-toastify to style the toast notifications.
import "react-toastify/dist/ReactToastify.css";

// Creating a root DOM element where the React app will be mounted.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React app into the root DOM element.
root.render(
  // Using a div container to hold both the ToastContainer and the main App component.
  <div>
    {/* ToastContainer is included here to ensure that toast notifications can be displayed throughout the app. */}
    <ToastContainer />
    {/* App component represents the main part of the application. */}
    <App />
  </div>
);
