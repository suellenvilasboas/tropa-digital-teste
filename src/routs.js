import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />;
        <Route exact path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
