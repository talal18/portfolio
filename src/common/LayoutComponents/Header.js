import React from "react";
import { browserHistory } from "react-router";

const Header = props => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#" onClick={() => browserHistory.push("#/")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => browserHistory.push("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => browserHistory.push("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
