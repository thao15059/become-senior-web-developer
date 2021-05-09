import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { searchRobot } from "./reducers";

const store = createStore(searchRobot);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
