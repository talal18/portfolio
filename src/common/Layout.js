import React, { Component } from "react";

import Header from "./LayoutComponents/Header";
import Footer from "./LayoutComponents/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
