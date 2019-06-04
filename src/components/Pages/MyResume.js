import React, { Component } from "react";

export default class MyResume extends Component {
  render() {
    return (
      <div>
        <form style={{ margin: 20 }}>
          <table>
            <div className="row">
              <thead>
                <tr>
                  <td className="col-md-4" />
                  <td className="col-md-8" />
                </tr>
                <br />
              </thead>
              <tbody>
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    Skills
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Front-end: React, React Native, AngularJS, Bootstrap,
                          HTML5, CSS
                        </p>
                      </li>
                      <li>
                        <p>Languages: JavaScript, Java, C#, COBOL, PHP</p>
                      </li>
                      <li>
                        <p>
                          Databases: PostgreSQL, Oracle, MySQL, MongoDB, Google
                          Firebase
                        </p>
                      </li>
                      <li>
                        <p>
                          Methodologies: Agile, Design Patterns, Object-oriented
                          Programming
                        </p>
                      </li>
                      <li>
                        <p>
                          Tools: Git, MS Office Suit, Xamp, Android Studio, MS
                          Visual Studio, MS Visual Code, Oracle VirtualBox
                        </p>
                      </li>
                      <li>
                        <p>Testing: JUnit, NUnit</p>
                      </li>
                      <li>
                        <p>Platforms: Mac OS, Linux, Windows</p>
                      </li>
                      <li>
                        <p>
                          Networking: TCP/IP, Wireshark, Cisco Packet Tracer
                        </p>
                      </li>
                      <li>
                        <p>Graphics: Photoshop CS6 </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of skills */}
                <br /> <br />
                {/* start of experience */}
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: "bold"
                      }}
                    >
                      RELEVANT WORK EXPERIENCE
                    </p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Freelance Developer - Jan, 2018 to Present
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>React.js and React Native developer.</p>
                      </li>
                      <li>
                        <p>
                          Responsible for constructing and implementing a mobile
                          application involving React Native, React, Redux, and
                          ES2018, Feathers, MongoDB, web APIs and custom
                          consumable RESTful APIs for a client.
                        </p>
                      </li>
                      <li>
                        <p>
                          Building user-friendly components using various React
                          UI frameworks such as Bootstrap.
                        </p>
                      </li>
                      <li>
                        <p>
                          Performing requirements analysis, design, service and
                          technology sourcing to over 4 customers.
                        </p>
                      </li>
                      <li>
                        <p>
                          Consistently resolving bugs, rolling out new patches,
                          updating content, and clearing backlogs with minimal
                          downtime.
                        </p>
                      </li>
                      <li>
                        <p>
                          Discussed, analyzed, and strategized production dates
                          with customers on a consistent basis to ensure clarity
                          of demands and delivery of product in a timely manner.
                        </p>
                      </li>
                      <li>
                        <p>
                          Providing graphical design services such as logo and
                          page layout design using Photoshop.
                        </p>
                      </li>
                      <li>
                        <p>
                          Designed and deployed landing pages and websites for
                          clients using HTML5, CSS, and JavaScript.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of experience */}
                <br /> <br />
                {/* start of giant tiger experience */}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Giant Tiger (3 weeks contract) - Aug, 2019 to May, 2019
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Built careers web pages for Giant Tiger.</p>
                      </li>
                      <li>
                        <p>Developed web pages using HTML and Javascript.</p>
                      </li>
                      <li>
                        <p>
                          Applied responsive and user friendly interfaces (UI)
                          using CSS, JQuery, Bootstrap, Slick, and Photoshop.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of syadev experience */}
                <br />
                <br />
                {/* start of sayadev experience */}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Saya Development - Feb, 2018 to Feb, 2019
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Developed web applications using React.js.</p>
                      </li>
                      <li>
                        <p>Developed mobile applications using React Native.</p>
                      </li>
                      <li>
                        <p>
                          Used NodeJS, Express for the backend and MongoDB for
                          the database.
                        </p>
                      </li>
                      <li>
                        <p>
                          Used SQLite for mobile applications local storage.
                        </p>
                      </li>
                      <li>
                        <p>
                          Design and applied user friendly interfaces (UI) for
                          web and mobile applications using CSS, Bootstrap, and
                          Adobe Photoshop.
                        </p>
                      </li>
                      <li>
                        <p>
                          Developed styling module on react native to create
                          responsive layouts.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of syadev experience */}
                <br /> <br />
                {/* start of tutor */}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Tutor - Algonquin College
                    </p>
                  </td>

                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Managed and tutored college students in Business
                          System Analysis, Java, Oracle Databases, Database
                          Administration, COBOL, Linux, and Math.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Classes were followed by hands-on programming to
                          confirm the effectiveness of the teachings and best
                          programming practices were discussed.
                        </p>
                      </li>
                      <li>
                        <p>
                          Designed and performed quizzes and tests to evaluate
                          students and provided constructive feedback.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of tutor */}
                <br /> <br />
                {/* start of personal projects */}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: "bold"
                      }}
                    >
                      Personal Projects
                    </p>
                  </td>
                  <td className="col-md-8" />
                </tr>
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Car Race Game – React Native
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Created components using classes and functions.</p>
                      </li>
                      <li>
                        <p>Used event handlers for UI components. </p>
                      </li>
                      <li>
                        <p>
                          Used android emulator and command line as debugging
                          tools
                        </p>
                      </li>
                      <li>
                        <p>Created animation using Native libraries </p>
                      </li>
                      <li>
                        <p>Created custom graphics using Adobe Photoshop. </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Weather App – React.js
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Created components, and event handlers.</p>
                      </li>
                      <li>
                        <p>
                          Implemented design language Bootstrap for smooth and
                          responsive UX.
                        </p>
                      </li>
                      <li>
                        <p>Created an API endpoint to fetch weather data.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Vehicle Lookup App – React.js
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Created components, and event handlers.</p>
                      </li>
                      <li>
                        <p>Created an API endpoint to fetch vehicle data.</p>
                      </li>
                      <li>
                        <p>Used Bootstrap for user interface design. </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Flappy Bird - Android game
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          An Android mobile game developed using Android studio.{" "}
                        </p>
                      </li>
                      <li>
                        <p>Used LibGdx to create custom animation and sound.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Automobile E-Commerce Website
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Used PHP, Javascript, HTML, and CSS to create an
                          e-commerce.
                        </p>
                      </li>
                      <li>
                        <p>Used PHPMyAdmin to create the database.</p>
                      </li>
                      <li>
                        <p>
                          Created an admin page to populate and edit the
                          database to dynamically change categories and brands.
                        </p>
                      </li>
                      <li>
                        <p>Created customer registration, login, and logout.</p>
                      </li>
                      <li>
                        <p>
                          Created a shopping cart page and integrated Paypal
                          online payment.
                        </p>
                      </li>
                      <li>
                        <p>
                          Made Store orders and payments available for Admin and
                          registered users.
                        </p>
                      </li>
                      <li>
                        <p>
                          Implemented email outgoing services to send
                          confirmation to customers after completing the
                          transaction.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of personal projects */}
                <br /> <br />
                {/* start of PROJECTS – COURSEWORK*/}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: "bold"
                      }}
                    >
                      PROJECTS – COURSEWORK (Algonquin College)
                    </p>
                  </td>
                  <td className="col-md-8" />
                </tr>
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Programming Language Research
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Used PostgreSQL to ensure persistence of data.</p>
                      </li>
                      <li>
                        <p>
                          Created and use WBS and Gantt chart for the project.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Facilitated reading from a CSV and registering data
                          into PostgreSQL database.
                        </p>
                      </li>
                      <li>
                        <p>
                          Retrieved data from the database and used queries
                          synthesize data.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Created a console application to choose the data for
                          retrieval.{" "}
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      COBOL Payroll System
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Wrote COBOL program JCL using prescribed design
                          document and top-down structured programming
                          techniques.
                        </p>
                      </li>
                      <li>
                        <p>
                          Prepared program documentation using prescribed
                          program specification.
                        </p>
                      </li>
                      <li>
                        <p>
                          Debugged COBOL problems using manual methods and the
                          Eclipse debugger.
                        </p>
                      </li>
                      <li>
                        <p>
                          Master file processing using both batch and online.
                        </p>
                      </li>
                      <li>
                        <p>
                          Prepared program documentation using prescribed
                          program specification.
                        </p>
                      </li>
                      <li>
                        <p>
                          Created a Payroll program which includes salary
                          calculation.
                        </p>
                      </li>
                      <li>
                        <p>Incorporated external file I/O.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Java Web Browser
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Implemented object-oriented programming methods of
                          Encapsulation, Inheritance, Abstraction, and
                          Polymorphism.
                        </p>
                      </li>
                      <li>
                        <p>
                          Used several tools including event handlers,
                          interfaces, and generics.
                        </p>
                      </li>
                      <li>
                        <p>
                          Used JavaFX to create scenes, panes, buttons, menus,
                          and animation..{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Incorporated file I/O and represented the results
                          graphically using JavaFX.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      System Analysis
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Created UMLs, context diagrams, event tables,
                          high-level use case diagrams, and entity relationship
                          diagrams.
                        </p>
                      </li>
                      <li>
                        <p>
                          Worked with Agile and SDLC system development life
                          cycle.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Design Patterns
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Used design patterns to create and refactor projects
                          into paradigms of MVC, Simple factory, Observer,
                          Singleton, DAU, and Builder.
                        </p>
                      </li>
                      <li>
                        <p>Used Swing GUI to create UI elements.</p>
                      </li>
                      <li>
                        <p>Worked with Java Servlet Architecture.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Android Application
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Used Android Studio to create layout, widgets, and
                          list views.
                        </p>
                      </li>
                      <li>
                        <p>
                          Designed and implemented databases, event handlers and
                          interfaces.
                        </p>
                      </li>
                      <li>
                        <p>
                          Created user interface elements using the Android
                          Material Design.
                        </p>
                      </li>
                      <li>
                        <p>
                          Worked with Android fragments, Async Task, Android
                          Smart Environment, and Apple iOS.
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Restaurant Website
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          Used JavaScript, PHP, HTML, and CSS to create multiple
                          web pages.
                        </p>
                      </li>
                      <li>
                        <p>
                          Created forms, submit buttons, radio buttons, drop
                          boxes, textbox validation, and messages.
                        </p>
                      </li>
                      <li>
                        <p>Used PHPMyAdmin to handle CRUD operations.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of PROJECTS – COURSEWORK*/}
                <br /> <br />
                {/* start of education */}
                <tr>
                  <td
                    className="col-md-4"
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      verticalAlign: "text-top"
                    }}
                  >
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: "bold"
                      }}
                    >
                      Education
                    </p>
                  </td>
                  <td className="col-md-8" />
                </tr>
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Computer Programming Diploma
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      (Sep 2015 to Dec 2017)
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Algonuin College (Ottawa - Ontario)</p>
                      </li>
                      <li>
                        <p>Dean’s Honor List CGPA 3.49/4.0</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    className="col-md-4"
                    style={{ verticalAlign: "text-top" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      Bachelor of International Business Administration
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }}
                    >
                      (Jan 2001 to May 2005)
                    </p>
                  </td>
                  <td
                    className="col-md-8"
                    style={{
                      fontSize: 14,
                      fontStyle: "italic",
                      verticalAlign: "text-top"
                    }}
                  >
                    <ul>
                      <li>
                        <p>Hashemite University (Jordan)</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* end of education */}
              </tbody>
            </div>
          </table>
        </form>
      </div>
    );
  }
}
