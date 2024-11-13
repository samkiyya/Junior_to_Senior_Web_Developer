import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createRoot } from "react-dom/client";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "tachyons";
import "./index.css";
import App from "./containers/App.jsx";
import { searchRobots } from "./reducers.js";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
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
