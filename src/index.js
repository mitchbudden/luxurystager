import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Home from "./components/home.jsx";
import Yacht from "./components/yacht.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <Router path="/" history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/yacht" component={Yacht} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
