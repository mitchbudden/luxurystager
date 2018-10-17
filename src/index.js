import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import App from "./components/App";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
