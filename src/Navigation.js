import React, { Component } from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./common/Layout";
import PageNotFound from "./common/PageNotFound";

import HomePage from "./components/Pages/HomePage";

import AboutPage from "./components/Pages/AboutPage";
import Contact from "./components/Pages/Contact";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={PageNotFound} />
      <Route path="http://carmodels.talal.tk" />
    </Route>
  </Router>
);

class Navigation extends Component {
  render() {
    return <div>{routes}</div>;
  }
}

export default Navigation;
