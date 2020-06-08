import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../assests/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./core/configureStore";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
