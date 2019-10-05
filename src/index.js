import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
import App from "./App";
import Signup from "./components/signup/";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
