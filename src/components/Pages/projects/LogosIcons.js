import React, { Component } from "react";

export default class LogosIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "NextMed",
          logo: require("../../../assets/images/nextmed-cover.png"),
          url: ""
        },
        {
          title: "GigHunt",
          logo: require("../../../assets/images/gigHunt-cover.png"),
          url: ""
        },
        {
          title: "Neighbor's Reno & Design",
          logo: require("../../../assets/images/nrad.png"),
          url: "http://www.nrad.ca"
        },
        {
          title: "Majdi Mall",
          logo: require("../../../assets/images/majdi-mall.png"),
          url: "http://www.majdi-mall.com/"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container text-center">
            <h1>Logos & Icons</h1>
            <p style={{ fontStyle: "italic", fontSize: 18 }}>
              My Graphic Designing and UX/UI Development projects
            </p>
          </div>
        </div>

        <div className="container-fluid bg-3 text-center">
          <div className="row">
            {this.state.projects.map((project, index) => {
              return (
                <div className="col-sm-3">
                  <p>{project.title}</p>
                  <a href={project.url}>
                    <img
                      src={project.logo}
                      className="img-responsive"
                      style={{
                        width: "100%",
                        padding: "5px",
                        backgroundColor: "#d6d6d6"
                      }}
                      alt="Image"
                    />
                  </a>
                  <br />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
