import React, { Component } from "react";
import { browserHistory } from "react-router";
import carRaceImage from "../../assets/images/car-race-cover.png";
import carModelImage from "../../assets/images/car-model-cover.png";
import nextMedImage from "../../assets/images/nextmed-cover.png";
import gigHuntImage from "../../assets/images/gigHunt-cover.png";
import LogosIcons from "../../assets/images/logos-and-icons.png";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Talal Qasem</h1>
            <p style={{ fontStyle: "italic", fontSize: 18 }}>
              I'm an experienced Web Developer with a demonstrated history in
              cross-platform web application development primarily in React
              Native. I love solving problems and creating new applications
              using React, JavaScript and it's frameworks, HTML5 and CSS,
              Bootstrap and PHP. I have a real passion for emerging technologies
              and I have demonstrated my enthusiasm in software and web
              development by continually learning after graduating with honors
              from Computer Programming from Algonquin College of Applied Arts
              and Technology. I am looking for exciting opportunities in a
              professional environment which I can grow and contribute.
            </p>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <h3>My Projects</h3>
          <br />
          <div className="row">
            <div className="col-sm-3">
              <p>Car Race</p>
              <a href="#" onClick={() => browserHistory.push("carrace")}>
                <img
                  src={carRaceImage}
                  className="img-responsive"
                  style={{
                    width: "100%",
                    padding: "5px",
                    backgroundColor: "#d6d6d6"
                  }}
                  alt="Image"
                />
              </a>
            </div>
            <div className="col-sm-3">
              <p>Car Model Finder</p>
              <a href="http://carmodels.talal.tk/">
                <img
                  src={carModelImage}
                  className="img-responsive"
                  style={{
                    width: "100%",
                    padding: "5px",
                    backgroundColor: "#d6d6d6"
                  }}
                  alt="Image"
                />
              </a>
            </div>
            <div className="col-sm-3">
              <p>NextMed</p>
              <img
                src={nextMedImage}
                className="img-responsive"
                style={{
                  width: "100%",
                  padding: "5px",
                  backgroundColor: "#d6d6d6"
                }}
                alt="Image"
              />
            </div>
            <div className="col-sm-3">
              <p>GigHunt</p>
              <img
                src={gigHuntImage}
                className="img-responsive"
                style={{
                  width: "100%",
                  padding: "5px",
                  backgroundColor: "#d6d6d6"
                }}
                alt="Image"
              />
            </div>
          </div>
        </div>
        <br />

        <div className="container-fluid bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <p>Logos & Icons</p>
              <a href="#" onClick={() => browserHistory.push("logos")}>
                <img
                  src={LogosIcons}
                  className="img-responsive"
                  style={{
                    width: "100%",
                    padding: "5px",
                    backgroundColor: "#d6d6d6"
                  }}
                  alt="Image"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
