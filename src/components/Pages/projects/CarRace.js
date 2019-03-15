import React, { Component } from "react";
import Demo0 from "../../../assets/images/car-race-demo-0.png";
import Demo2 from "../../../assets/images/car-race-demo-2.gif";

export default class CarRace extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Car Race</h1>
            <p style={{ fontStyle: "italic", fontSize: 18 }}>
              Car Race game is a simple 2D game, in which the player should
              avoid crash with other cars.
            </p>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <br />

          <div className="row">
            <br />
            <div className="col-sm-2" />
            <div className="col-sm-3">
              <img
                src={Demo0}
                className="img-responsive"
                style={{
                  width: "100%",
                  backgroundColor: "#d6d6d6",
                  padding: "10px"
                }}
                alt="Image"
              />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-3">
              <img
                src={Demo2}
                className="img-responsive"
                style={{
                  width: "100%",
                  backgroundColor: "#d6d6d6",
                  padding: "10px"
                }}
                alt="Image"
              />
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
