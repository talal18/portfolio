import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <form style={{ margin: 20 }}>
          <br />

          <table>
            <div className="row">
              <thead>
                <tr style={{ fontSize: 22, fontWeight: "bold" }}>
                  <td className="col-md-4">Skills</td>
                  <td className="col-md-8" />
                </tr>
                <br />
              </thead>
              <tbody
                style={{
                  fontSize: 14,
                  fontStyle: "italic"
                }}
              >
                <tr>
                  <td className="col-md-4" />
                  <td className="col-md-8">
                    <ul>
                      <li>
                        Front-end: React, React Native, AngularJS, Bootstrap,
                        HTML5, CSS
                      </li>
                      <li>Languages: JavaScript, Java, C#, COBOL, PHP </li>
                      <li>
                        Databases: PostgreSQL, Oracle, MySQL, MongoDB, Google
                        Firebase
                      </li>
                      <li>
                        Methodologies: Agile, Design Patterns, Object-oriented
                        Programming
                      </li>
                      <li>
                        Tools: Git, MS Office Suit, Xamp, Android Studio, MS
                        Visual Studio, MS Visual Code, Oracle VirtualBox
                      </li>
                      <li>Testing: JUnit, NUnit </li>
                      <li>Platforms: Mac OS, Linux, Windows </li>
                      <li>
                        Networking: TCP/IP, Wireshark, Cisco Packet Tracer
                      </li>
                      <li>Graphics: Photoshop CS6 </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </div>
          </table>

          <br />

          <table>
            <div className="row">
              <thead>
                <tr>
                  <td className="col-md-4">
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: "bold"
                      }}
                    >
                      RELEVANT WORK EXPERIENCE
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Freelance Developer Jan, 2018 to Present
                    </p>
                  </td>
                  <td className="col-md-8" />
                </tr>
                <br />
              </thead>
              <tbody
                style={{
                  fontSize: 14,
                  fontStyle: "italic"
                }}
              >
                <tr>
                  <td className="col-md-4" />
                  <td className="col-md-8">
                    <ul>
                      <li>React.js and React Native developer.</li>
                      <li>
                        Responsible for constructing and implementing a mobile
                        application involving React Native, React, Redux, and
                        ES2018, Feathers, MongoDB, web APIs and custom
                        consumable RESTful APIs for a client.
                      </li>
                      <li>
                        Building user-friendly components using various React UI
                        frameworks such as Bootstrap.
                      </li>
                      <li>
                        Performing requirements analysis, design, service and
                        technology sourcing to over 4 customers.
                      </li>
                      <li>
                        Consistently resolving bugs, rolling out new patches,
                        updating content, and clearing backlogs with minimal
                        downtime.
                      </li>
                      <li>
                        Discussed, analyzed, and strategized production dates
                        with customers on a consistent basis to ensure clarity
                        of demands and delivery of product in a timely manner.
                      </li>
                      <li>
                        Providing graphical design services such as logo and
                        page layout design using Photoshop.
                      </li>
                      <li>
                        Designed and deployed landing pages and websites for
                        clients using HTML5, CSS, and JavaScript.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </div>
          </table>
        </form>
      </div>
    );
  }
}
