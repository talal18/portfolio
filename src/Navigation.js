import React, { Component } from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./common/Layout";
import PageNotFound from "./common/PageNotFound";
import HomePage from "./components/Pages/HomePage";
import MyResume from "./components/Pages/MyResume";
import Contact from "./components/Pages/Contact";
import CarRace from "./components/Pages/projects/CarRace";
import LogosIcons from "./components/Pages/projects/LogosIcons";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/resume" component={MyResume} />
      <Route path="/contact" component={Contact} />
      <Route path="/carrace" component={CarRace} />
      <Route path="/logos" component={LogosIcons} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
);

class Navigation extends Component {
  render() {
    return <div>{routes}</div>;
  }
}

export default Navigation;
