import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./redux/reducers";
import "./Style/index.css";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhacers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
