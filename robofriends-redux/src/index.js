import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { searchRobot } from "./reducers";

const logger = createLogger();
const store = createStore(searchRobot, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
