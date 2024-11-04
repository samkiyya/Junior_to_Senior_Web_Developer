import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "tachyons";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// // importing React and ReactDom from the "react" and "react-dom" packages, respectively.
// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css";
// import App from "./App.jsx";
// const root = document.getElementById("root");
// ReactDom.createRoot(root).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/*// importing React and ReactDom from the "react" and "react-dom" packages, respectively.
import {StrictMode} from "react";
import {createRoot} from "react-dom";
import "./index.css";
import App from "./App.jsx";
const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)*/
