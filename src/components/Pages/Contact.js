import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 24
          }}
        >
          Personal Info
        </p>
        <form>
          <table className="table table-condensed">
            <thead>
              <tr>
                <td />
                <td />
              </tr>
            </thead>
            <tbody style={{ fontSize: 14 }}>
              <tr>
                <td style={{ fontWeight: "bold" }}>Name</td>
                <td style={{ fontStyle: "italic" }}>Talal Qasem</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>email</td>
                <td style={{ fontStyle: "italic" }}>talal_kasem@hotmail.com</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>LinkedIn</td>
                <td style={{ fontStyle: "italic" }}>
                  <a
                    style={{ fontStyle: "italic", color: "#242424" }}
                    href="linkedin.com/in/talal-qasem"
                  >
                    linkedin.com/in/talal-qasem
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>GitHub</td>
                <td style={{ fontStyle: "italic" }}>
                  <a
                    style={{ fontStyle: "italic", color: "#242424" }}
                    href="http://github.com/talal18"
                  >
                    https://github.com/talal18
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
